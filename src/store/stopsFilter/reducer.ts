import type { stopsFilterActionType, stopsFilterType } from '../../type';

import { stopsFilter } from './actions';

const stopsFilterArr = Object.values(stopsFilter);

export default function stopsFilterReducer(
    state: stopsFilterType[] = stopsFilterArr,
    action: stopsFilterActionType
): stopsFilterType[] {
    switch (action.type) {
        case 'SET_FILTER': {
            const findIndex = state.findIndex((el) => el === action.filter);
            const hasAll = state[0] === stopsFilter.ALL;

            if (action.filter === stopsFilter.ALL && findIndex === -1) return stopsFilterArr;
            if (action.filter === stopsFilter.ALL && findIndex !== -1) return [];

            if (findIndex !== -1 && hasAll) return [...state.slice(1, findIndex), ...state.slice(findIndex + 1)];
            if (findIndex !== -1 && !hasAll) return [...state.slice(0, findIndex), ...state.slice(findIndex + 1)];

            if (hasAll) {
                const newFilter = state.slice(1);
                newFilter.push(action.filter);
                return newFilter;
            }

            const newFilter = [...state, action.filter];
            if (newFilter.length === stopsFilterArr.length - 1) return stopsFilterArr;

            return newFilter;
        }
        default:
            return state;
    }
}
