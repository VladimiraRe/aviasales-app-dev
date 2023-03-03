import type { actionsType, ticketsType } from '../../type';

export { isLoading, fetchInfo, tickets };

function isLoading(state = true, action: actionsType) {
    switch (action.type) {
        case 'SET_LOADING':
            if (state === action.isLoading) return state;
            return action.isLoading;
        default:
            return state;
    }
}

function fetchInfo(state = { error500: 0, searchId: false, isCompleteData: false }, action: actionsType) {
    switch (action.type) {
        case 'SET_FETCH_INFO':
            if (action.info.error500) return { ...state, error500: state.error500 + 1 };
            return { ...state, ...action.info };
        default:
            return state;
    }
}

function tickets(state: ticketsType = null, action: actionsType) {
    switch (action.type) {
        case 'SET_TICKETS':
            return action.tickets;
        default:
            return state;
    }
}
