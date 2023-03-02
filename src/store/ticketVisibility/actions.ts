import type { stopsFilterType, sortingType } from '../../type';

export const sortingName = {
    CHEAP: 'CHEAP',
    FAST: 'FAST',
    OPTIMAL: 'OPTIMAL',
} as const;

export const stopsFilterName = {
    ALL: 'ALL',
    NONSTOP: 'NONSTOP',
    ONESTOP: 'ONESTOP',
    TWOSTOP: 'TWOSTOP',
    THREESTOP: 'THREESTOP',
} as const;

export const setSorting = (sorting: sortingType) => ({
    type: 'SET_SORTING' as const,
    sorting,
});

export const setStopsFilter = (filter: stopsFilterType) => ({
    type: 'SET_FILTER' as const,
    filter,
});

export const setDisplayedTickets = (displayedTickets: number) => ({
    type: 'SET_DISPLAYED_TICKETS' as const,
    displayedTickets,
});
