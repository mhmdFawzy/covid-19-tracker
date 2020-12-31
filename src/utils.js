import React from 'react';
import { Circle } from 'react-leaflet';
import { v4 as uuidv4 } from 'uuid';
import numeral from 'numeral';

// css for circles according to casses choise
export const casesTypeColors = {
    cases: {
        hex: '#CC1034',
        // size of circle
        multiplier: 800
    },
    recovered: {
        hex: '#7dd71d',
        multiplier: 1200
    },
    deaths: {
        hex: '#fb4443',
        multiplier: 2000
    }
};
export const prettyPrintStat = (stat, sign = '=') => `${sign}${numeral(stat).format('0.0a')}`;

// draw circles around countries on map
export const showDataOnMap = (data, selectedLat, selectedLong, casesType = 'cases') =>
    data.map((country) => (
        <Circle
            key={uuidv4()}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            fillOpacity={0.4}
            radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}></Circle>
    ));
