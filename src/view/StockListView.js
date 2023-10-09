import React, {useState} from 'react';
import StockList from "../components/StockList";
import {getStock} from "../services/FinancialDataService";
import {Grid} from "@mui/material";

function StockListView(props) {
    return (
        <div>
            <StockList></StockList>
        </div>
    );
}

export default StockListView;