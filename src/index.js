import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
const App = React.lazy(() => import('./App'));
import 'normalize.css';
import { ReactComponent as Loader } from './assets/Loader.svg';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Loader />}>
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
