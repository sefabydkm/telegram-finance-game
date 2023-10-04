import React, {useEffect} from 'react';
import ApexCharts from 'apexcharts'

function Charts(props) {
    useEffect(() => {
        const options = {
            chart: {
                type: 'candlestick',
            },
            series: [{
                data: [
                    [1538856000000, [6593.34, 6600, 6582.63, 6600]],
                    [1538856100000, [6595.16, 6604.76, 6590.73, 6593.86]],
                    [1538856200000, [6595.16, 6604.76, 6590.73, 6593.86]],
                    [1538856300000, [6595.16, 6604.76, 6590.73, 6593.86]],
                    [1538856400000, [6595.16, 6604.76, 6590.73, 6593.86]],
                    [1538856500000, [6595.16, 6604.76, 6590.73, 6593.86]],
                    [1538856600000, [6595.16, 6604.76, 6590.73, 6593.86]],
                    [1538856700000, [6595.16, 6604.76, 6590.73, 6593.86]],
                    [1538856800000, [6595.16, 6604.76, 6590.73, 6593.86]],
                    [1538856900000, [6595.16, 6604.76, 6590.73, 6593.86]]
                ]
            }],
            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#3C90EB',
                        downward: '#d91b37'
                    }
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
        <div id="chart" />
    );
}

export default Charts;