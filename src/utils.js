import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';
import { v4 as uuidv4 } from 'uuid';

// css for circles according to casses choise
const casesTypeColors = {
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
// draw circles around countries on map
export const showDataOnMap = (data, casesType = 'cases') => {
    data.map((country) => (
        <Circle
            key={uuidv4()}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            fillOpacity={0.4}
            radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}>
            <Popup>
                <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}></div>
                    <div className="info-name">{country.country}</div>
                    <div className="info-confirmed">
                        Cases: {numeral(country.cases).format('0,0')}
                    </div>
                    <div className="info-recovered">
                        Recovered: {numeral(country.recovered).format('0,0')}
                    </div>
                    <div className="info-deaths">
                        Deaths: {numeral(country.deaths).format('0,0')}
                    </div>
                </div>
            </Popup>
        </Circle>
    ));
};
