import React, {useEffect, useState} from 'react';
import MUIDataTable from "mui-datatables";
import { useNavigate } from 'react-router-dom';
import {flatten, formatDateToYYYYMMDD} from "../utils";
import {getStockList} from "../services/FinancialDataService";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
function StockList(props) {
    const [data, setdata] = useState([]);
    const [date, setDate] = useState(new Date("2023-08-17"))
    useEffect(() => {
       setdata(getStockList().map((q) => flatten(q)));
    },[]);
    const navigate = useNavigate()

    const columns = [
        {
            name: "data.Meta Data.2. Symbol",
            label: "Stock",
        },
        {
            name: "data.Time Series (Daily)."+formatDateToYYYYMMDD(date)+".4. close",
            label: "Close",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "data.Time Series (Daily)."+formatDateToYYYYMMDD(date)+".5. volume",
            label: "Volume",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "state",
            label: "Change",
            options: {
                sort: false,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    let todayValue = data[dataIndex]["data.Time Series (Daily)."+formatDateToYYYYMMDD(date)+".4. close"]
                    let yesterdayValue = data[dataIndex]["data.Time Series (Daily)."+formatDateToYYYYMMDD(new Date((new Date(date)).setDate(date.getDate() - 1)))+".4. close"]
                    let difference =((Math.abs(todayValue-yesterdayValue)/yesterdayValue)*100).toFixed(2)
                    if (todayValue === yesterdayValue){
                        return <div>
                            {difference}%
                            <CompareArrowsIcon></CompareArrowsIcon>
                        </div>
                    }
                    else if(todayValue > yesterdayValue){
                        return <div>
                            {difference}%
                            <ArrowUpwardIcon style={{color:"green"}}></ArrowUpwardIcon>
                        </div>
                    }
                    else{
                        return <div>
                            {difference}%
                            <ArrowDownwardIcon style={{color:"red"}}></ArrowDownwardIcon>
                            </div>
                    }

                },
            },
        },
    ];


    const options = {

        filterType: 'checkbox',
        print:false,
        download:false,
        viewColumns:false,
        selectableRows:'none',
        onCellClick: (cellIndex, rowIndex) => {

            navigate('/telegram-finance-game/stock/'+data[rowIndex.dataIndex].stock)
        }
    };

    return (
        <div>
            <MUIDataTable
                title={"Stock List"}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    );
}

export default StockList;