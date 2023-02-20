import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './components/App';

const container = document.getElementById('root');
if (container !== null) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
}
