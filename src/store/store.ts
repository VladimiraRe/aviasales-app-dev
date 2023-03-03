import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { stopsFilterName, sortingName } from './ticketVisibility/actions';
import reducers from './reducer';

const preloadedState = {
    isLoading: false,
    fetchInfo: undefined,
    tickets: null,
    stopsFilter: Object.values(stopsFilterName),
    sorting: sortingName.CHEAP,
    displayedTickets: 5,
    hasError: {},
};

const store = configureStore({
    reducer: reducers,
    preloadedState,
    middleware: [thunk],
});

export default store;
