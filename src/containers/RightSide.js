import React, { useContext } from 'react';
import { Card, CardContent } from '@material-ui/core';
import countryContext from './../context/countryContext';
import Table from './../components/Table';
import Graph from './../components/Graph';

const RightSide = () => {
    const CountryContext = useContext(countryContext);
    const { sortedCountries, historical } = CountryContext;
    return (
        <Card className="app__right">
            <CardContent>
                <Table countries={sortedCountries} />
                <Graph countries={historical} />
            </CardContent>
        </Card>
    );
};

export default React.memo(RightSide);
