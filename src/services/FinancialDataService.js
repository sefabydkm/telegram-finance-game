import React from 'react';
import stockListData from '../db/stockList.json'

let stocks = ["ibm", "apple", "microsoft", "amazon", "tesla"]

export function getStock(stock) {
    return stockListData.stockList.filter(s => s.stock === stock)[0].data[`Time Series (Daily)`]
}

export function getStockList() {
    return stockListData.stockList
}
