import React from "react";
import { Link, useLocation } from "react-router-dom";

function NotHomeNavbar() {
  return (
    <div className="not-home">
      <div className="back">
        <Link to="/">
          <i className="fi fi-rr-angle-left"></i>
          <span>Stocks</span>
        </Link>
      </div>
      <section>
        <div className="add-favorite">
          <span>Add to Favorites</span>
          <i className="fi fi-rr-heart"></i>
        </div>
        <div className="profile"></div>
      </section>
    </div>
  );
}

function HomeNavbar() {
  return <div>Home</div>;
}

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      {location.pathname === "/" ? <HomeNavbar /> : <NotHomeNavbar />}
    </nav>
  );
}

export default Navbar;
