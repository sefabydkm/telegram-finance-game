import React from 'react';
import StockList from "../components/StockList";
import getStockList from "../services/FinancialDataService";

function StockListView(props) {
    console.log(getStockList())
    return (
        <div>
            <StockList></StockList>
        </div>
    );
}

export default StockListView;