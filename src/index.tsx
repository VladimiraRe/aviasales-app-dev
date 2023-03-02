import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import type { appDispatch } from './type';
import store from './store/store';
import { getTickets } from './store/requests/actions';
import './index.scss';
import App from './components/App';

const container = document.getElementById('root');
if (container !== null) {
    const { dispatch }: { dispatch: appDispatch } = store;
    dispatch(getTickets());

    const root = ReactDOM.createRoot(container);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
