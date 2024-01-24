import React, { useContext, useState, useEffect } from "react";
import Chart from "react-google-charts";
import GraphChart from "../components/GraphChart";
import { useParams } from "react-router-dom";
import { CompanyContext } from "../context_api/companyContext";

function Company() {
  const { id } = useParams();
  const { companies } = useContext(CompanyContext);
  const [currentCompany, setCurrentCompany] = useState(null);

  useEffect(() => {
    setCurrentCompany(companies.filter((c) => c.id == id)[0]);
    console.log(currentCompany);
  }, [companies, id]);

  const data = currentCompany
    ? [
        ["Task", "Hours per Day"],
        ["Current Asset", currentCompany.assetsAndLiabilities.currentAsset],
        [
          "Non Current Asset",
          currentCompany.assetsAndLiabilities.nonCurrentAsset,
        ],
        [
          "Current Liabilities",
          currentCompany.assetsAndLiabilities.currentliabilities,
        ],
        [
          "Non Current Liabilities",
          currentCompany.assetsAndLiabilities.noncurrentliabilities,
        ],
      ]
    : [];

  const options = {
    title: "Assets And Liabilities",
    sliceText: "outside",
    fontSize: 12,
  };
  return (
    <>
      {currentCompany && (
        <div className="company">
          <header>
            <div>
              <h1>{currentCompany.name}</h1>
              <small className="sub-text">AAPL</small>
            </div>
            <div>
              <small className="sub-text mb-5">Half year profitability</small>
              <small className="growth">
                <i className="fi fi-rr-arrow-trend-up"></i> 15.96%
              </small>
            </div>
            <div>
              <small className="sub-text mb-5">Sector</small>
              <h4>Information Technology</h4>
            </div>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/418UAZ71uJL._AC_UF894,1000_QL80_.jpg"
                alt=""
                style={{ width: 100, height: 100 }}
              />
            </div>
          </header>
          {/* Main */}
          <main>
            <div className="graph">
              <h2>Overview</h2>
              <GraphChart data={currentCompany.yearlyRevenue} />
            </div>
            <div className="market-status">
              <h3>Market Status</h3>
              <section>
                <div>
                  <ul>
                    <li>
                      <span>Debt to Equality Ratio</span>
                      <span>{currentCompany?.debt}</span>
                    </li>
                    <li>
                      <span>Change in revenue</span>
                      <span>10%</span>
                    </li>
                    <li>
                      <span>Current Ratio</span>
                      <span>{currentCompany.currentRatio}</span>
                    </li>
                    <li>
                      <span>Average Growth Rate</span>
                      <span>{currentCompany.growthRate * 100}%</span>
                    </li>
                  </ul>
                </div>
                <Chart
                  chartType="PieChart"
                  data={data}
                  options={options}
                  width={"100%"}
                  height={"400px"}
                />
              </section>
            </div>
            <div className="about">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                nemo!
              </p>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default Company;
