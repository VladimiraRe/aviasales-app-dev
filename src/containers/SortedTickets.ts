import { connect } from 'react-redux';

import type { storeType, ticketsType, ticketType, sortingType } from '../type';
import CardsSet from '../components/CardsSet';

const mapStateToProps = (state: storeType, ownProps: { tickets: ticketsType }) => {
    if (!ownProps.tickets) return ownProps;
    return getSortedTickets(state.sorting, ownProps.tickets);
};

export default connect(mapStateToProps)(CardsSet);

function getSortedTickets(sorting: sortingType, tickets: Exclude<ticketsType, [] | null>) {
    switch (sorting) {
        case 'CHEAP': {
            const newTickets = [...tickets].sort((prevTicket, nextTicket) => prevTicket.price - nextTicket.price);
            return { tickets: newTickets };
        }
        case 'FAST': {
            const newTickets = [...tickets].sort((prevTicket, nextTicket) => {
                return countDuration(prevTicket) - countDuration(nextTicket);
            });
            return { tickets: newTickets };
        }
        case 'OPTIMAL': {
            const newTickets = [...tickets].sort((prevTicket, nextTicket) => {
                const priceRatio = nextTicket.price / prevTicket.price;
                const durationRatio = countDuration(nextTicket) / countDuration(prevTicket);
                return 2 - (priceRatio + durationRatio);
            });
            return { tickets: newTickets };
        }
        default:
            return { tickets };
    }
}

function countDuration({ segments }: { segments: ticketType['segments'] }) {
    const [{ duration: duration1 }, { duration: duration2 }] = segments;
    return duration1 + duration2;
}
