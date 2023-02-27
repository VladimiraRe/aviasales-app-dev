import { Provider } from 'react-redux';

import store from '../../store/store';
import './App.scss';
import Filter from '../StopsFilter';
import Head from '../Head';
import Content from '../Content';

import useResize from './useResize';

export default function App() {
    const width = useResize();

    return (
        <Provider store={store}>
            <div className='app'>
                <Head />
                <div className='app__wrap'>
                    <Filter isMobile={width < 768} />
                    <div className='app__wrap'>
                        <Content width={width} />
                    </div>
                </div>
            </div>
        </Provider>
    );
}
