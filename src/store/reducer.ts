import { combineReducers } from 'redux';

import type { ticketType } from '../type';

import stopsFilter from './stopsFilter/reducer';
import sorting from './sorting/reducer';

const tickets = (state: ticketType[] | null = null, action = { type: 'GETTICKETS' }) => {
    switch (action.type) {
        case 'GETTICKETS':
            return state;
        default:
            return state;
    }
};

const reducers = combineReducers({ tickets, stopsFilter, sorting });

export default reducers;
