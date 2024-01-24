import React, { useEffect, useState, useContext } from "react";
import { Input, Select, Button } from "antd";
import CompanyItem from "../components/CompanyItem";
import { Link } from "react-router-dom";
import { suggestInvestment } from "../utilities/utilities";
import { CompanyContext } from "../context_api/companyContext";

function Home() {
  const { companies, riskFactor, setRiskFactor } = useContext(CompanyContext);
  const [suggested, setSuggested] = useState([]);
  // Inputs state
  // risk factor default value is low
  function riskFactorHandler(value) {
    setRiskFactor(value);
  }

  function applyClickHandler() {
    const result = suggestInvestment(companies, 0.5, riskFactor);
    setSuggested(result);
  }

  useEffect(() => {
    setSuggested(suggestInvestment(companies, 0.5, riskFactor));
  }, [companies]);

  return (
    <div className="home">
      {/* Header Part with search input */}
      <div className="image">
        <div className="overlay"></div>
        <span>Find the best company for investment</span>
      </div>
      <div className="search-container">
        <div className="search">
          <i className="fi fi-rr-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="inputs"></div>
      </div>

      {/* Filter */}
      <div className="filter">
        <section>
          <span>Investment Amount</span>
          <Input size="default" placeholder="" type="number" />
        </section>
        <section>
          <span>Risk Factor</span>
          <Select
            defaultValue="low"
            style={{ width: 120 }}
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
            onChange={(val) => riskFactorHandler(val)}
          />
        </section>
        <section>
          <Button size="large" type="primary" onClick={applyClickHandler}>
            Apply
          </Button>
        </section>
      </div>

      {/* Result Companies */}
      <div className="company-list">
        {suggested.map((company, index) => (
          <Link to={`/company/${company.id}`} key={"suggest-company" + index}>
            <CompanyItem rank={index + 1} name={company.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
