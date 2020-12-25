import React from 'react';
import HeaderContainer from '../components/Header';
import CountryState from '../context/CountryState';
import DataBoxes from './DataBoxes';
import Map from '../components/Map';

const LeftSide = () => {
    return (
        <div className="app__left">
            <CountryState>
                <HeaderContainer />
                <DataBoxes />
            </CountryState>
            <Map />
        </div>
    );
};

export default LeftSide;
