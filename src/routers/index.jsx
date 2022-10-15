import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import ComingSoon from "../pages/ComingSoon";
import Seminar from "../pages/Seminar";
import { Navbar } from "../components";
import Lomba from "../pages/Lomba";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Routers = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/competition" element={<Lomba />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
