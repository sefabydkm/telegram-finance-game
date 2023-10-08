import React, {useState} from 'react';
import StockList from "../components/StockList";
import {getStock} from "../services/FinancialDataService";
import {Grid} from "@mui/material";

function StockListView(props) {
    const [backgroundColor, setBackgroundColor] = useState('#071e26');
    return (
        <div style={{ backgroundColor }}>
                <StockList></StockList>
        </div>
    );
}

export default StockListView;