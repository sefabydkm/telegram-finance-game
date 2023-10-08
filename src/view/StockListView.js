import React from 'react';
import StockList from "../components/StockList";
import {getStock} from "../services/FinancialDataService";

function StockListView(props) {
    return (
        <div>
            <StockList></StockList>
        </div>
    );
}

export default StockListView;