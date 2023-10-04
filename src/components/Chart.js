import React, {useEffect} from 'react';
import ApexCharts from 'apexcharts'
import data from "../db/DB";

function Charts(props) {
    useEffect(() => {
        const options = {
            series: data,
            chart: {
                type: 'candlestick',
                height: "auto"
            },
            title: {
                text: 'CandleStick Chart',
                align: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                tooltip: {
                    enabled: true
                }
            }
        };

        const chart = new ApexCharts(document.querySelector('#chart'), options);
        chart.render();

        // Cleanup when the component unmounts
        return () => {
            chart.destroy();
        };
    }, []);
    return (
        <div id="chart"/>
    );
}

export default Charts;