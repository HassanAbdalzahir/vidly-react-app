import React from "react";
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
          Navbar <span className="badge bg-secondary">{totalCounters}</span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
