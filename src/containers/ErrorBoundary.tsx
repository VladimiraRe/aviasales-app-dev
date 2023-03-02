import { Component } from 'react';

import type { actionsType } from '../type';
import { setError } from '../store/errors/actions';

interface IProps {
    children: JSX.Element;
    dispatch: (action: actionsType) => actionsType;
}

export default class ErrorBoundary extends Component<IProps> {
    componentDidCatch() {
        const { dispatch } = this.props;
        dispatch(setError('networkError'));
    }

    render() {
        const { children } = this.props;
        return children;
    }
}
