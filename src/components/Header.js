import React from "react";
import logo from "../assets/pokemon_logo.png";

function Header({ searchQuery, setSearchQuery }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <img src={logo} alt="logo" width="180px" height="50px" />

      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <form className="form-inline ml-auto">
          <input
            type="text"
            className="form-control mr-sm-2"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-light">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
