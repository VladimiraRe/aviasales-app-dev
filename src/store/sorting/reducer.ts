import type { sortingType, sortingActionType } from '../../type';

import { sorting } from './actions';

export default function sortingReducer(state: sortingType = sorting.CHEAP, action: sortingActionType) {
    switch (action.type) {
        case 'SET_SORTING':
            return action.sorting;
        default:
            return state;
    }
}
