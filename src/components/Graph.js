import React from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import PropTypes from 'prop-types';

const graphData = [];

const Graph = ({ countries }) => {
    for (const key in countries.cases) {
        if (Object.hasOwnProperty.call(countries.cases, key)) {
            const element = countries.cases[key];
            graphData.push(element);
        }
    }
    const data = {
        labels: Array.from({ length: 30 }, (_, i) => i + 1),
        datasets: [
            {
                label: 'Cases in last 30 days',
                data: graphData,
                fill: true,
                backgroundColor: 'rgba(204, 16, 52, 0.5)',
                borderColor: '#CC1034'
            }
        ]
    };
    const options = {
        elements: {
            point: {
                radius: 0
            }
        },
        maintainAspectRatio: false,
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
            <Line data={data} options={options} />
        </div>
    );
};
Graph.propTypes = {
    countries: PropTypes.array.isRequired
};
export default React.memo(Graph);
