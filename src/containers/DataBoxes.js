import React from 'react';
import InfoBox from '../components/InfoBox';

const DataBoxes = ({ data }) => {
    const { cases, recovered, deaths, todayCases, todayDeaths, todayRecovered } = data;
    return (
        <div className="app__state">
            <InfoBox title="Coronavirus" cases={todayCases} total={cases} />
            <InfoBox title="Recovered" cases={todayRecovered} total={recovered} />
            <InfoBox title="Deaths" cases={todayDeaths} total={deaths} />
        </div>
    );
};

export default React.memo(DataBoxes);
