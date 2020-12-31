import React from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { casesTypeColors } from './../utils';
const graphData = [];

const Graph = ({ countries, casesType }) => {
    for (const key in countries[casesType]) {
        if (Object.hasOwnProperty.call(countries[casesType], key)) {
            const element = countries[casesType][key];
            graphData.push(element);
        }
    }

    const data = {
        labels: Array.from({ length: 30 }, (_, i) => i + 1),
        datasets: [
            {
                label: `${casesType} in last 30 days`,
                data: graphData,
                fill: true,
                backgroundColor: casesTypeColors[casesType].hex + '80',
                borderColor: casesTypeColors[casesType].hex
            }
        ]
    };
    const options = {
        elements: {
            point: {
                radius: 0
            }
        },
        maintainAspectRatio: true,
        tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function (tooltipItem) {
                    return numeral(tooltipItem.value).format('+0,0');
                }
            }
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        callback: function (value) {
                            return numeral(value).format('0a');
                        }
                    }
                }
            ]
        }
    };
    return (
        <div>
            <h1>Last 30 days {casesType}</h1>
            <Line data={data} options={options} />
        </div>
    );
};
Graph.propTypes = {
    countries: PropTypes.object.isRequired,
    casesType: PropTypes.string.isRequired
};
export default React.memo(Graph);
