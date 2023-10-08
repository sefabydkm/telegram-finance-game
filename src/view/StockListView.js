import React from 'react';
import StockList from "../components/StockList";
import {getStock} from "../services/FinancialDataService";
import {Grid} from "@mui/material";

function StockListView(props) {
    return (
        <div>
            <Grid container alignItems={"center"} justifyContent={"center"}>
                <StockList></StockList>
            </Grid>
        </div>
    );
}

export default StockListView;