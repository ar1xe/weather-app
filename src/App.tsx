import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Header from "./Shared/Header/Header";
import Popup from "./Shared/Popup/Popup";

function App() {
  return (
    <div className="global-wrapper">
      <Popup />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mountStatistics" element={<MonthStatistics />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
