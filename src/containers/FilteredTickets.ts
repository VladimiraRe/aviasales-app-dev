import { connect } from 'react-redux';

import type { stopsFilterType, storeType, ticketsType } from '../type';
import { stopsFilterName as filterArr } from '../store/ticketVisibility/actions';

import SortedTickets from './SortedTickets';

const mapStateToProps = (state: storeType) => {
    if (!state.tickets) return { tickets: null };
    return { tickets: getVisibleTickets(state.tickets, state.stopsFilter) };
};

export default connect(mapStateToProps)(SortedTickets);

function getVisibleTickets(tickets: ticketsType, filter: stopsFilterType[]): ticketsType {
    if (!tickets) return tickets;
    let newTickets: ticketsType = [];
    if (filter[0] === filterArr.ALL) return tickets;
    if (filter.find((el) => el === filterArr.NONSTOP))
        newTickets = [
            ...newTickets,
            ...tickets.filter(({ segments }) => segments.some((segment) => segment.stops.length === 0)),
        ];
    if (filter.find((el) => el === filterArr.ONESTOP))
        newTickets = [
            ...newTickets,
            ...tickets.filter(({ segments }) => segments.some((segment) => segment.stops.length === 1)),
        ];
    if (filter.find((el) => el === filterArr.TWOSTOP))
        newTickets = [
            ...newTickets,
            ...tickets.filter(({ segments }) => segments.some((segment) => segment.stops.length === 2)),
        ];
    if (filter.find((el) => el === filterArr.THREESTOP))
        newTickets = [
            ...newTickets,
            ...tickets.filter(({ segments }) => segments.some((segment) => segment.stops.length === 3)),
        ];
    return newTickets;
}
