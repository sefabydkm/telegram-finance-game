import ChartView from "./view/ChartView";
import StockListView from "./view/StockListView";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import React, {useEffect} from "react";

const tele = window.Telegram.WebApp

function App() {
    useEffect(() => {
        tele.ready();
    });
    return (
     <BrowserRouter >
         <Routes>
             <Route path="/telegram-finance-game/" element={<Navigate to="/stock" />} />
             <Route path="/telegram-finance-game/stock" element={<StockListView />} />
             <Route path="/telegram-finance-game/stock/:id" element={<ChartView />} />
         </Routes>
     </BrowserRouter>
  );
}

export default App;
