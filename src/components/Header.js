import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import countryContext from './../context/countryContext';
import { v4 as uuidv4 } from 'uuid';
import { FormControl, MenuItem, Select } from '@material-ui/core';

const Header = () => {
    const CountryContext = useContext(countryContext);
    const { countries, selectedCountry, getCountries, getCountryData } = CountryContext;
    const [selection, setSelectedCountry] = useState(selectedCountry);

    useEffect(() => {
        getCountryData('all');
        getCountries();
    }, []);
    const handleSelectedCountry = (e) => {
        setSelectedCountry(e.target.value);
    };
    useEffect(() => {
        if (selection !== 'worldwide') {
            getCountryData(selection);
        }
    }, [selection]);
    return (
        <div className="app__header">
            <h1 className="upper">covid-19 traker</h1>
            <FormControl className="app__dropdown">
                <Select
                    variant="outlined"
                    value={selection}
                    onChange={(e) => {
                        handleSelectedCountry(e);
                    }}>
                    <MenuItem value="worldwide" className="capital">
                        worldwide
                    </MenuItem>
                    {countries.map((country) => (
                        <MenuItem
                            key={uuidv4()}
                            name={country.country}
                            value={country.countryInfo.iso2}>
                            {country.country}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

Header.propTypes = {
    countries: PropTypes.array.isRequired,
    selectedCountry: PropTypes.string.isRequired
};
export default React.memo(Header);
