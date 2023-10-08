import React from 'react';
import axios from "axios";

let stocks = ["IBM", "AAPL", "MSFT", "AMZN", "TSLA"]

function getStockList() {
    return stocks.map((stock) => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&apikey=ZQRUW4GP3NM4XKDO`)
            .then(response => {
                return response.data['Time Series (Daily)']
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })
}

export default getStockList;
