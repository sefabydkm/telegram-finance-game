import React from 'react';
import stockListData from '../db/stockList.json'
import {formatDateToYYYYMMDD} from "../utils";

let stocks = ["ibm", "apple", "microsoft", "amazon", "tesla"]

export function getStock(stock, date) {
    let d = formatDateToYYYYMMDD(date)
    console.log(d)
    return stockListData.stockList.filter( s => s.stock === stock)[0].data[`Time Series (Daily)`].filter(dt => dt == d)[0]
}

export function getStockList()
{
    return stockListData.stockList.map(s => s.stock)
}
