import React from "react";
import Chart from "../components/Chart";

function Company() {
  return (
    <div className="company">
      <header>
        <div>
          <h1>Apple</h1>
          <small className="sub-text">AAPL</small>
        </div>
        <div>
          <small className="sub-text mb-5">Half year profitability</small>
          <small className="growth">
            <i class="fi fi-rr-arrow-trend-up"></i> 15.96%
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
      <main>
        <div className="graph">
          <h2>Overview</h2>
          <Chart />
        </div>
        <div className="market-status">
          <h3>Market Status</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            labore nulla eaque et voluptas accusamus sunt totam saepe maiores
            cupiditate tempore
          </p>
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
  );
}

export default Company;
