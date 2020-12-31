import './App.css';
import React from 'react';
const LeftSide = React.lazy(() => import('./containers/LeftSide'));
const RightSide = React.lazy(() => import('./containers/RightSide'));
import CountryState from './context/CountryState';

function App() {
    return (
        <CountryState>
            <div className="app">
                <LeftSide />
                <RightSide />
            </div>
        </CountryState>
    );
}

export default App;
