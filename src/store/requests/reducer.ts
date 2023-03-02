import type { actionsType, ticketsType } from '../../type';

export { isLoading, searchId, tickets };

function isLoading(state = true, action: actionsType) {
    switch (action.type) {
        case 'SET_LOADING':
            if (state === action.isLoading) return state;
            return action.isLoading;
        default:
            return state;
    }
}

function searchId(state: string | null = null, action: actionsType) {
    switch (action.type) {
        case 'SET_SEARCH_ID':
            return !state ? action.searchId : state;
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
