import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Commponents/Home";
import CardsDetails from "./Commponents/CardsDetails";
import Create from "./Commponents/Create";

const App = () => {
  return (
    <div className="App  w-screen h-screen  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />

        <Route path="/Cardsdtails/:id" element={<CardsDetails />} />
      </Routes>
    </div>
  );
};

export default App;
