import { createContext, useState } from "react";

const CompanyContext = createContext();

// Example context initial value:
const initialCompanyData = [];

function CompanyProvider({ children }) {
  const [companies, setCompanies] = useState([]);
  const [riskFactor, setRiskFactor] = useState("low");

  return (
    <CompanyContext.Provider
      value={{ companies, setCompanies, riskFactor, setRiskFactor }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export { CompanyContext, CompanyProvider };
