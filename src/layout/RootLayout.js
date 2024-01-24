import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../routes/Home";

function RootLayout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location.pathname === "/" ? <Home /> : <Outlet />}
    </>
  );
}

export default RootLayout;
