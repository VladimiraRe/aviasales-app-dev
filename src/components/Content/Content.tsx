import { useDispatch, useSelector } from 'react-redux';

import type { storeType, errorsType, errorsObjType, ticketType } from '../../type';
import SortingLink from '../../containers/SortingLink';
import Loading from '../Loading';
import FilteredTickets from '../../containers/FilteredTickets';
import Button from '../Button';
import WarningError from '../Error/WarningError';
import CriticalError from '../Error/CriticalError';
import { setDisplayedTickets } from '../../store/ticketVisibility/actions';

export default function Content({ width }: { width: number }) {
    const dispatch = useDispatch();
    const { fetchError, networkError }: errorsObjType = useSelector((state: storeType) => state.hasError);
    const { tickets, displayedTickets, stopsFilter } = useSelector((state: storeType) => ({
        tickets: state.tickets,
        displayedTickets: state.displayedTickets,
        stopsFilter: state.stopsFilter,
    }));

    const isButtonVisible = !networkError && tickets && tickets.length !== displayedTickets && stopsFilter.length !== 0;

    const mainContent = (
        <>
            <Loading />
            <FilteredTickets />
            {isButtonVisible ? (
                <Button
                    text='Показать еще 5 билетов!'
                    onClick={() => dispatch(setDisplayedTickets(5))}
                    isHidden={false}
                />
            ) : null}
        </>
    );

    const body = createBody(fetchError as errorsType | undefined, tickets, mainContent);

    return (
        <>
            <SortingLink isMobile={width < 431} />
            {body}
        </>
    );
}

function createBody(error: errorsType | undefined, tickets: ticketType[] | null, content: JSX.Element) {
    if (error && tickets && tickets.length !== 0) {
        return (
            <>
                <WarningError error={error as errorsType} />
                {content}
            </>
        );
    }

    if (error) return <CriticalError error={error as errorsType} />;

    if (tickets && tickets.length !== 0) return content;

    return null;
}
