import type { sortingType, stopsFilterType, actionsType } from '../../type';

import { sortingName, stopsFilterName } from './actions';

export function sorting(state: sortingType = sortingName.CHEAP, action: actionsType) {
    switch (action.type) {
        case 'SET_SORTING':
            return action.sorting;
        default:
            return state;
    }
}

const stopsFilterArr = Object.values(stopsFilterName);
export function stopsFilter(state: stopsFilterType[] = stopsFilterArr, action: actionsType): stopsFilterType[] {
    switch (action.type) {
        case 'SET_FILTER': {
            return setFilter(state, action.filter);
        }
        default:
            return state;
    }
}

export function displayedTickets(state = 5, action: actionsType) {
    switch (action.type) {
        case 'SET_DISPLAYED_TICKETS':
            return state + action.displayedTickets;
        default:
            return state;
    }
}

function setFilter(stateFilter: stopsFilterType[], filter: stopsFilterType) {
    const findIndex = stateFilter.findIndex((el) => el === filter);
    const hasAll = stateFilter[0] === stopsFilterName.ALL;

    if (filter === stopsFilterName.ALL && findIndex === -1) return stopsFilterArr;
    if (filter === stopsFilterName.ALL && findIndex !== -1) return [];

    if (findIndex !== -1 && hasAll) return [...stateFilter.slice(1, findIndex), ...stateFilter.slice(findIndex + 1)];
    if (findIndex !== -1 && !hasAll) return [...stateFilter.slice(0, findIndex), ...stateFilter.slice(findIndex + 1)];

    if (hasAll) {
        const newFilter = stateFilter.slice(1);
        newFilter.push(filter);
        return newFilter;
    }

    const newFilter = [...stateFilter, filter];
    if (newFilter.length === stopsFilterArr.length - 1) return stopsFilterArr;

    return newFilter;
}
