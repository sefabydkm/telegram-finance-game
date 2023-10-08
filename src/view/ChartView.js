import React from 'react';
import {Button, Grid} from "@mui/material";
import Chart from "../components/Chart";
import LiveTable from "../components/LiveTable";
function ChartView(props) {

    return (
        <div>
            <Grid container alignItems={"center"} justifyContent={"center"} paddingY={5} spacing={3}>
                <Grid item xs={20}>
                    <Chart/>
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
            </Grid>
        </div>
    );
}

export default ChartView;