import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import countryContext from './countryContext';
import countryReducer from './countryReducer';
import axios from 'axios'; //optional
const CountryState = ({ children }) => {
    const initialState = {
        countries: [],
        sortedCountries: [],
        historical: {},
        selectedCountry: 'worldwide',
        cases: 0,
        recovered: 0,
        deaths: 0,
        todayCases: 0,
        todayDeaths: 0,
        todayRecovered: 0,
        selectedLat: 34.8,
        selectedLong: -40.47,
        zoom: 2
    };
    const [state, dispatch] = useReducer(countryReducer, initialState);
    const getCountries = () => {
        axios
            .all([
                axios.get('https://disease.sh/v3/covid-19/countries'),
                axios.get('https://disease.sh/v3/covid-19/countries?sort=cases'),
                axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
            ])
            .then(
                axios.spread((countries, sortedCountries, historical) => {
                    dispatch({
                        type: 'GET_COUNTRIES',
                        payload: countries.data
                    });
                    dispatch({
                        type: 'GET_SORTED_COUNTRIES',
                        payload: sortedCountries.data
                    });
                    dispatch({
                        type: 'GET_HISTORICAL',
                        payload: historical.data
                    });
                })
            )
            .catch((err) => {
                console.log(err);
            });
    };
    const getCountryData = (country) => {
        if (country === 'all') {
            axios
                .get('https://disease.sh/v3/covid-19/all')
                .then((res) => {
                    console.log(res.data);
                    dispatch({
                        type: 'GET_COUNTRY_DATA',
                        payload: res.data
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios
                .get(`https://disease.sh/v3/covid-19/countries/${country}`)
                .then((res) => {
                    dispatch({
                        type: 'GET_COUNTRY_DATA',
                        payload: res.data
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
    return (
        <countryContext.Provider
            value={{
                countries: state.countries,
                selectedCountry: state.selectedCountry,
                sortedCountries: state.sortedCountries,
                historical: state.historical,
                cases: state.cases,
                recovered: state.recovered,
                deaths: state.deaths,
                todayCases: state.todayCases,
                todayDeaths: state.todayDeaths,
                todayRecovered: state.todayRecovered,
                selectedLat: state.selectedLat,
                selectedLong: state.selectedLong,
                zoom: state.zoom,
                getCountries,
                getCountryData
            }}>
            {children}
        </countryContext.Provider>
    );
};
CountryState.prototype = {
    children: PropTypes.element.isRequired
};
export default CountryState;
