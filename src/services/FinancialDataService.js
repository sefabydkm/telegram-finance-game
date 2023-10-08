import React from 'react';
import stockListData from '../db/stockList.json'

let stocks = ["ibm", "apple", "microsoft", "amazon", "tesla"]

function getStock(stock) {
    return stockListData.filter((dbStock) => stock==dbStock.stock)
}

function getStockList()
{
    return stockListData
}
export default getStockList;
