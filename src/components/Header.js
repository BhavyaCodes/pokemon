import React from "react";
import "../assets/css/headerStyle.css";
import logo from "../assets/pokemon_logo.png";

function Header({ searchQuery, setSearchQuery }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a href="/">
        <img src={logo} alt="logo" width="180px" height="50px" />
      </a>

      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <form className="form-inline ml-auto search-bar">
          <div class="input-group ml-auto">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Header;
