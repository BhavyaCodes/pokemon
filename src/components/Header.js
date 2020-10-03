import React, { useState } from "react";
import logo from "../assets/pokemon_logo.png";

function Header({ searchQuery, setSearchQuery }) {
  const [searchValue, setSearchValue] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setSearchQuery(searchValue);
  }

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
        <form className="form-inline ml-auto" onSubmit={handleClick}>
          <input
            type="text"
            className="form-control mr-sm-2"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn btn-outline-light">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
