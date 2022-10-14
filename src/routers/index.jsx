import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ComingSoon from "../pages/ComingSoon";
import Seminar from "../pages/Seminar";
import { Navbar } from "../components";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/seminar" element={<Seminar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
