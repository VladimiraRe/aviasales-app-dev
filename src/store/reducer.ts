import { combineReducers } from 'redux';

import { sorting, stopsFilter, displayedTickets } from './ticketVisibility/reducer';
import { isLoading, fetchInfo, tickets } from './requests/reducer';
import hasError from './errors/reducer';

const reducers = combineReducers({
    isLoading,
    fetchInfo,
    tickets,
    stopsFilter,
    sorting,
    hasError,
    displayedTickets,
});

export default reducers;
