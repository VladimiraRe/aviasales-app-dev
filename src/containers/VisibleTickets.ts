import { connect } from 'react-redux';

import type { stopsFilterType, storeType, ticketType } from '../type';
import { stopsFilter as filterArr } from '../store/stopsFilter/actions';
import CardsSet from '../components/CardsSet';

const mapStateToProps = (state: storeType) => {
    if (!state.tickets) return { tickets: null };
    return { tickets: getVisibleTickets(state.tickets, state.stopsFilter) };
};

export default connect(mapStateToProps)(CardsSet);

function getVisibleTickets(tickets: ticketType[], filter: stopsFilterType[]): ticketType[] {
    let newTickets: ticketType[] = [];
    if (filter[0] === filterArr.ALL) return tickets;
    if (filter.find((el) => el === filterArr.NONSTOP))
        newTickets = [
            ...newTickets,
            ...tickets.filter(({ segments: [there, back] }) => there.stops.length + back.stops.length === 0),
        ];
    if (filter.find((el) => el === filterArr.ONESTOP))
        newTickets = [
            ...newTickets,
            ...tickets.filter(({ segments: [there, back] }) => there.stops.length + back.stops.length === 1),
        ];
    if (filter.find((el) => el === filterArr.TWOSTOP))
        newTickets = [
            ...newTickets,
            ...tickets.filter(({ segments: [there, back] }) => there.stops.length + back.stops.length === 2),
        ];
    if (filter.find((el) => el === filterArr.THREESTOP))
        newTickets = [
            ...newTickets,
            ...tickets.filter(({ segments: [there, back] }) => there.stops.length + back.stops.length === 3),
        ];
    return newTickets;
}
