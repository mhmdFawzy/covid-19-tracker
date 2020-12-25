import './App.css';
import React from 'react';
import LeftSide from './containers/LeftSide';
import RightSide from './containers/RightSide';

function App() {
    return (
        <div className="app">
            <LeftSide />
            <RightSide />
        </div>
    );
}

export default App;
