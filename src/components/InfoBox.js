import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
const InfoBox = ({ title, cases, total, color }) => {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title" color={color}>
                    {title}
                </Typography>
                <h2 className="infoBox__cases">{cases}</h2>
                <Typography className="infoBox__total" color={color}>
                    {total} total
                </Typography>
            </CardContent>
        </Card>
    );
};

export default React.memo(InfoBox);
