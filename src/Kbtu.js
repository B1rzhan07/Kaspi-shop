import React from "react";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import Buying from "./Buying";

const Kbtu = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Buying />} />
      </Routes>
    </div>
  );
};

export default Kbtu;
