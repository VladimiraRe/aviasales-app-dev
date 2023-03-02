import { useDispatch, useSelector } from 'react-redux';

import type { actionsType, errorsType, storeType, errorsObjType, appDispatch } from '../../type';
import './App.scss';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Filter from '../StopsFilter';
import Head from '../Head';
import Content from '../Content';
import CriticalError from '../Error/CriticalError';
import WarningError from '../Error/WarningError';
import useError from '../Error/useError';

import useResize from './useResize';

export default function App() {
    const dispatch: appDispatch = useDispatch();
    const width = useResize();

    useError();
    const hasError: errorsObjType = useSelector((state: storeType) => state.hasError);

    const errorComponent = createErrorComponent(hasError);

    return (
        <ErrorBoundary dispatch={(action: actionsType) => dispatch(action)}>
            <div className='app'>
                <Head />
                {errorComponent}
                <div className='app__wrap'>
                    <Filter isMobile={width < 768} />
                    <div className='app__wrap'>
                        <Content width={width} />
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    );
}

function createErrorComponent(hasError: errorsObjType) {
    const { componentsError, networkError } = hasError;
    if (networkError) return <CriticalError error={networkError as errorsType} />;
    if (Object.keys(hasError).length > 1 || (componentsError as number) > 1) return <CriticalError />;
    if (componentsError) return <WarningError error='componentsError' />;
    return null;
}
