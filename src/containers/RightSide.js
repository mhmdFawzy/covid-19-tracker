import React, { useContext } from 'react';
import countryContext from './../context/countryContext';
const Table = React.lazy(() => import('./../components/Table'));
const Graph = React.lazy(() => import('./../components/Graph'));

const RightSide = () => {
    const CountryContext = useContext(countryContext);
    const { sortedCountries, historical, casesType } = CountryContext;
    return (
        <div className="card app__right">
            <div>
                <Table countries={sortedCountries} />
                <Graph countries={historical} casesType={casesType} />
            </div>
        </div>
    );
};

export default React.memo(RightSide);
