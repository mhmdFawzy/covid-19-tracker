import React, { useContext } from 'react';
import InfoBox from '../components/InfoBox';
import countryContext from './../context/countryContext';

const DataBoxes = () => {
    const CountryContext = useContext(countryContext);
    const { cases, recovered, deaths, todayCases, todayDeaths, todayRecovered } = CountryContext;
    return (
        <div className="app__state">
            <InfoBox title="Coronavirus" cases={todayCases} total={cases} />
            <InfoBox title="Recovered" cases={todayRecovered} total={recovered} />
            <InfoBox title="Deaths" cases={todayDeaths} total={deaths} />
        </div>
    );
};

export default DataBoxes;
