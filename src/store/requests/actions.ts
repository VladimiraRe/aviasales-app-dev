import type { ticketType, appDispatch } from '../../type';
import { setError } from '../errors/actions';
import type { ISearchId, IGetTickets } from '../../api/serverAPI';
import DbAPI from '../../api/serverAPI';

interface IFetchInfo {
    error500?: boolean;
    searchId?: boolean;
    isCompleteData?: boolean;
}

export const setLoading = (isLoading: boolean) => ({
    type: 'SET_LOADING' as const,
    isLoading,
});

export const setFetchInfo = (info: IFetchInfo) => ({
    type: 'SET_FETCH_INFO' as const,
    info,
});

export const setTickets = (tickets: ticketType[]) => ({
    type: 'SET_TICKETS' as const,
    tickets,
});

export const getTickets = () => async (dispatch: appDispatch) => {
    const DB = new DbAPI();
    dispatch(setLoading(true));

    let error500 = 0;

    try {
        const { searchId } = await getFetch<ISearchId>(() => DB.getSearchId());
        dispatch(setFetchInfo({ searchId: true }));
        return await getAllTickets(() => DB.getTickets(searchId));
    } catch (err) {
        dispatch(setError('fetchError'));
        dispatch(setLoading(false));
        return false;
    }

    async function getFetch<T extends ISearchId | IGetTickets>(fetch: () => Promise<T>): Promise<T> {
        const res = await fetch();
        if (res.error) {
            if (res.error.status === 500 && error500 < 5) {
                error500 += 1;
                dispatch(setFetchInfo({ error500: true }));
                return getFetch(fetch);
            }
            throw new Error(`Couldn't fetch ${res.error.url}, response status: ${res.error.status}`);
        }
        error500 = 0;
        return res;
    }

    async function getAllTickets(fetch: () => Promise<IGetTickets>): Promise<boolean> {
        const { tickets, stop } = await getFetch<IGetTickets>(fetch);
        if (stop) {
            dispatch(setLoading(false));
            dispatch(setFetchInfo({ isCompleteData: true }));
            return true;
        }
        dispatch(setTickets(tickets));
        return getAllTickets(fetch);
    }
};
