import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="mainNav">
      <NavLink to="/">Home </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/history">History</NavLink>
    </nav>
  );
}

export default Navbar;
