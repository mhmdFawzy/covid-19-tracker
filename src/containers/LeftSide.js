import React, { useContext } from 'react';
import HeaderContainer from '../components/Header';
import DataBoxes from './DataBoxes';
import Map from '../components/Map';
import countryContext from './../context/countryContext';

const LeftSide = () => {
    const CountryContext = useContext(countryContext);
    const {
        countries,
        selectedCountry,
        getCountries,
        getCountryData,
        cases,
        recovered,
        deaths,
        todayCases,
        todayDeaths,
        todayRecovered,
        selectedLat,
        selectedLong,
        zoom
    } = CountryContext;
    return (
        <div className="app__left">
            <HeaderContainer data={{ countries, selectedCountry, getCountries, getCountryData }} />
            <DataBoxes
                data={{ cases, recovered, deaths, todayCases, todayDeaths, todayRecovered }}
            />
            <Map data={{ selectedLat, selectedLong, zoom, countries }} />
        </div>
    );
};

export default React.memo(LeftSide);
