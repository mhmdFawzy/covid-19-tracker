import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import WindowedSelect, { createFilter } from 'react-windowed-select';

const options = [{ label: 'Worldwide', value: 'all', name: 'Worldwide' }];

const Header = ({ data }) => {
    const { countries, selectedCountry, getCountries, getCountryData } = data;
    const [selection, setSelectedCountry] = useState(selectedCountry);
    if (countries.length > 1) {
        countries.forEach((country) => {
            options.push({
                label: country.country,
                value: country.countryInfo.iso2,
                name: country.country
            });
        });
    }

    useEffect(() => {
        getCountryData('all');
        getCountries();
    }, []);
    const handleSelectedCountry = useCallback((e) => {
        setSelectedCountry(e.value);
    }, []);
    useEffect(() => {
        if (selection !== 'worldwide') {
            getCountryData(selection);
        }
    }, [selection]);

    return (
        <div className="app__header card">
            <h1>covid-19 traker</h1>
            <WindowedSelect
                options={options}
                onChange={(e) => {
                    handleSelectedCountry(e);
                }}
                styles={{
                    option: (base) => ({
                        ...base,
                        height: 50,
                        padding: '10px 12px'
                    })
                }}
            />
        </div>
    );
};

Header.propTypes = {
    data: PropTypes.object.isRequired
};
export default React.memo(Header);
