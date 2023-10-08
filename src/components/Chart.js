import React, {useEffect} from 'react';
import ApexCharts from 'apexcharts'
import  jsonData from "../db/data.json"
function Charts(props) {
    useEffect(() => {
        const options = {
            series:[{
                data: jsonData.data.map(item => {
                    return {
                        x: new Date(item.x), // Convert Date object to timestamp if needed
                        y: item.y
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