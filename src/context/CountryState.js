import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import countryContext from './countryContext';
import countryReducer from './countryReducer';
import axios from 'axios'; //optional
const CountryState = ({ children }) => {
    const initialState = {
        countries: [],
        selectedCountry: 'worldwide',
        cases: 0,
        recovered: 0,
        deaths: 0,
        todayCases: 0,
        todayDeaths: 0,
        todayRecovered: 0
    };
    const [state, dispatch] = useReducer(countryReducer, initialState);
    const getCountries = () => {
        axios
            .get('https://disease.sh/v3/covid-19/countries')
            .then((res) => {
                dispatch({
                    type: 'GET_COUNTRIES',
                    payload: res.data
                });
            })
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
                    console.log(res.data);
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
                cases: state.cases,
                recovered: state.recovered,
                deaths: state.deaths,
                todayCases: state.todayCases,
                todayDeaths: state.todayDeaths,
                todayRecovered: state.todayRecovered,
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
