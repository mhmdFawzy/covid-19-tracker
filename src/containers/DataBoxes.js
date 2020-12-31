import React from 'react';
import PropTypes from 'prop-types';
const InfoBox = React.lazy(() => import('../components/InfoBox'));

const DataBoxes = ({ data }) => {
    const {
        cases,
        recovered,
        deaths,
        todayCases,
        todayDeaths,
        todayRecovered,
        setCasesType,
        casesType
    } = data;
    return (
        <div className="app__state">
            <InfoBox
                title="Coronavirus Cases"
                cases={todayCases}
                total={cases}
                cardCasesType={'cases'}
                setCasesType={setCasesType}
                casesType={casesType}
                isRed
            />
            <InfoBox
                className="infoBox__cases--green"
                title="Recovered Today"
                cases={todayRecovered}
                total={recovered}
                cardCasesType={'recovered'}
                setCasesType={setCasesType}
                casesType={casesType}
            />
            <InfoBox
                title="Deaths Today"
                cases={todayDeaths}
                total={deaths}
                cardCasesType={'deaths'}
                setCasesType={setCasesType}
                casesType={casesType}
                isRed
            />
        </div>
    );
};
DataBoxes.propTypes = {
    data: PropTypes.object.isRequired
};
export default React.memo(DataBoxes);
