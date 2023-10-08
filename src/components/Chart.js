import React, {useEffect} from 'react';
import ApexCharts from 'apexcharts'

function Charts(props) {
    useEffect(() => {
        const dateKeys = Object.keys(props.data);

        const options = {
            series: [{
                data: dateKeys.map(date => {
                    return {
                        x: date,
                        y: [props.data[date][`1. open`], props.data[date][`2. high`], props.data[date][`3. low`], props.data[date][`4. close`]]
                    };
                }),
            }],
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