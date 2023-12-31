import React, {useEffect, useState} from 'react';
import {Button, Grid} from "@mui/material";
import Chart from "../components/Chart";
import LiveTable from "../components/LiveTable";
import {getStock} from "../services/FinancialDataService";
import {useNavigate, useParams} from "react-router-dom";

function ChartView() {
    let {stockName} = useParams();
    const [stockData, setStockData] = useState({});
    const [backgroundColor, setBackgroundColor] = useState('#071e26');
    const navigate = useNavigate()

    useEffect(() => {
        setStockData(getStock(stockName))
    }, [])

    if (Object.keys(stockData).length === 0) {
        return <div>No data available.</div>;
    }

    function onClick(){
        navigate('/telegram-finance-game/stock/')
    }

    return (
        <div style={{ backgroundColor }}>
            <Grid container alignItems={"center"} justifyContent={"center"} paddingY={5} spacing={3}>
                <Grid item xs={20}>
                    <Chart data={stockData} name = {stockName}></Chart>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="success">
                        Buy
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="error">
                        Sell
                    </Button>
                </Grid>
                <Grid>
                    <LiveTable></LiveTable>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" onClick={onClick}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default ChartView;