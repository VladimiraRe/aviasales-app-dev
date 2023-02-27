import type { stopsFilterType } from '../../type';

export const stopsFilter = {
    ALL: 'ALL',
    NONSTOP: 'NONSTOP',
    ONESTOP: 'ONESTOP',
    TWOSTOP: 'TWOSTOP',
    THREESTOP: 'THREESTOP',
} as const;

export const setStopsFilter = (newFilter: stopsFilterType) => ({
    type: 'SET_FILTER' as const,
    filter: newFilter,
});
