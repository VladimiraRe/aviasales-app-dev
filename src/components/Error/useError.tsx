import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import type { appDispatch } from '../../type';
import { setError } from '../../store/errors/actions';
import { setLoading } from '../../store/requests/actions';

export default function useError() {
    const dispatch: appDispatch = useDispatch();

    const error = 'networkError';

    const checkOnline = useCallback(
        () =>
            checkOnlineState(() => {
                dispatch(setError(error));
                dispatch(setLoading(false));
            }),
        [dispatch]
    );

    checkOnline();

    useEffect(() => {
        window.addEventListener('online', checkOnline);
        return () => window.removeEventListener('online', checkOnline);
    }, [checkOnline]);
}

function checkOnlineState(sendAction: () => void) {
    if (navigator.onLine) return;
    sendAction();
}
