import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import numeral from 'numeral';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Table = ({ countries }) => {
    return (
        <>
            <h1>Live cases by country</h1>
            <PerfectScrollbar>
                <table className="table">
                    <tbody>
                        {countries &&
                            countries.map(({ country, cases }) => (
                                <tr key={uuidv4()}>
                                    <td>{country}</td>
                                    <td>
                                        <strong>{numeral(cases).format()}</strong>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </PerfectScrollbar>
        </>
    );
};
Table.propTypes = {
    countries: PropTypes.array.isRequired
};
export default React.memo(Table);
