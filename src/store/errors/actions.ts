import type { errorsType } from '../../type';

export const errorPossibleValues = ['fetchError', 'componentsError', 'networkError'] as const;

export const setError = (error: errorsType) => ({
    type: 'SET_ERROR' as const,
    error,
});
