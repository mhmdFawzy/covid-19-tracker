import './App.css';
import React from 'react';
import LeftSide from './containers/LeftSide';
import RightSide from './containers/RightSide';
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
