import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "../pages/Home";
import ComingSoon from "../pages/ComingSoon";
import Seminar from "../pages/Seminar";
import Expo from "../pages/Expo";
import { Navbar } from "../components";
import Lomba from "../pages/Lomba";
import NotFound from "../pages/NotFound";
import ComingSoonRoute from "./ComingSoonRoute";
import About from "../pages/About";
import Live from "../pages/Live";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Routers = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<ComingSoonRoute />}>
            <Route path="/seminar" element={<Seminar />} />
            <Route path="/live" element={<Live />} />
          </Route>
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/competition" element={<Lomba />} />
            <Route path="/expo" element={<Expo />} />
            <Route path="/about-us" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default Routers;
