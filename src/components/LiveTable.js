import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function LiveTable(props) {
    return (
        <TableContainer component={"paper"}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Live Data</TableCell>
                        <TableCell align="right">Today</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   <TableRow>
                       <TableCell component="th" scope="row">Buying</TableCell>
                       <TableCell align="right">Coming Soon</TableCell>
                   </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Selling</TableCell>
                        <TableCell align="right">Coming Soon</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Lowest(Today)</TableCell>
                        <TableCell align="right">Coming Soon</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Lowest(This Week)</TableCell>
                        <TableCell align="right">Coming Soon</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Highest(Today)</TableCell>
                        <TableCell align="right">Coming Soon</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Highest(This Week)</TableCell>
                        <TableCell align="right">Coming Soon</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default LiveTable;