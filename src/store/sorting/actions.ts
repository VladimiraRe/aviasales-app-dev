import type { sortingType } from '../../type';

export const sorting = {
    CHEAP: 'CHEAP',
    FAST: 'FAST',
    OPTIMAL: 'OPTIMAL',
} as const;

export const setSorting = (newSorting: sortingType) => ({
    type: 'SET_SORTING' as const,
    sorting: newSorting,
});
