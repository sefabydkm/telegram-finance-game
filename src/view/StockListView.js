import React from 'react';
import StockList from "../components/StockList";
import {getStock} from "../services/FinancialDataService";

function StockListView(props) {
    let date = new Date()
    date.setDate(date.getDate() - 3)
    console.log(getStock("tesla",  date))
    return (
        <div>
            <StockList></StockList>
        </div>
    );
}

export default StockListView;