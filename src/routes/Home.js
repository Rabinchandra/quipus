import React from "react";
import { Input, Select, Button } from "antd";

function Home() {
  return (
    <div className="home">
      <div className="image">
        <div className="overlay"></div>
        <span>Find the best company for investment</span>
      </div>
      <div className="search-container">
        <div className="search">
          <i class="fi fi-rr-search"></i>
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
            defaultValue="Low"
            style={{ width: 120 }}
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
          />
        </section>
        <section>
          <Button size="large" type="primary">
            Apply
          </Button>
        </section>
      </div>
    </div>
  );
}

export default Home;
