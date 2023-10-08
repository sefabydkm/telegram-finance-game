import React from 'react';

function FinancialDataService(props) {

    var stocks = ["IBM","AAPL","MSFT","AMZN","TSLA"]
    function getStockList(){
        return stocks.map((stock) =>{
            return axios.get()
        })
    }
}

export default FinancialDataService;