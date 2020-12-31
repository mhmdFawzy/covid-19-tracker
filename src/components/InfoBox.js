import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import PropTypes from 'prop-types';
import { prettyPrintStat } from './../utils';

const InfoBox = ({ title, cases, total, cardCasesType, casesType, setCasesType, isRed }) => {
    const [active, setactive] = useState(false);

    const cardRef = useRef(null);
    useEffect(() => {
        cardRef.current.onclick = () => {
            setCasesType(cardCasesType);
        };
    }, []);
    useEffect(() => {
        setactive(cardCasesType === casesType);
    }, [casesType]);
    return (
        <div
            className={`card infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'} ${
                !isRed && 'infoBox__cases--green'
            }`}
            ref={cardRef}>
            <div>
                <p className="infoBox__title">{title}</p>
                <h2 className="infoBox__cases">{prettyPrintStat(cases, '+')}</h2>
                <p className="infoBox__total">{prettyPrintStat(total)} Total</p>
            </div>
        </div>
    );
};
InfoBox.propTypes = {
    title: PropTypes.string.isRequired,
    cases: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    cardCasesType: PropTypes.string.isRequired,
    setCasesType: PropTypes.func.isRequired,
    casesType: PropTypes.string.isRequired,
    isRed: PropTypes.bool
};
export default React.memo(InfoBox);
