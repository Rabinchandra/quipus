import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../routes/Home";
import companiesData from "../data/companiesData";
import {
  getCompaniesFinalData,
  getScores,
  suggestInvestment,
} from "../utilities/utilities";
import { CompanyContext } from "../context_api/companyContext";

function RootLayout() {
  const location = useLocation();
  const { setCompanies } = useContext(CompanyContext);
  const riskTolerance = 0.5; // Adjust this value based on your risk tolerance
  const data = getCompaniesFinalData(companiesData);
  const scores = getScores(data, riskTolerance);

  // once we get the scores, store the complete data with score in the context data
  useEffect(() => {
    setCompanies(scores);
  }, []);

  return (
    <>
      <Navbar />
      {location.pathname === "/" ? <Home /> : <Outlet />}
    </>
  );
}

export default RootLayout;
