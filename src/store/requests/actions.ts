import type { ticketType, appDispatch } from '../../type';
import { setError } from '../errors/actions';

import DbAPI from './serverAPI';

export const setLoading = (isLoading: boolean) => ({
    type: 'SET_LOADING' as const,
    isLoading,
});

export const setSearchId = (searchId: string) => ({
    type: 'SET_SEARCH_ID' as const,
    searchId,
});

export const setTickets = (tickets: ticketType[]) => ({
    type: 'SET_TICKETS' as const,
    tickets,
});

export const getTickets = () => async (dispatch: appDispatch) => {
    const DB = new DbAPI();

    dispatch(setLoading(true));

    try {
        const searchId = await DB.getSearchId();
        return await DB.getTickets(searchId, (tickets) => dispatch(setTickets(tickets))).then((res) => {
            dispatch(setLoading(false));
            return res;
        });
    } catch {
        dispatch(setError('fetchError'));
        dispatch(setLoading(false));
        return false;
    }
};
