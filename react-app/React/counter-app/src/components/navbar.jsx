import React, { Component } from "react";

// converting to stateless fucntional component

const NavBar = ({totalCounters}) => {
    return (   <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Navbar
      <span className="badge badge-pill bandge-secondary">{totalCounters}</span>
    </a>
  </nav> );
}
 
export default NavBar;
