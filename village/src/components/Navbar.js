import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink activeClassName="nav-active" exact to="/">Smurfs</NavLink>
      <NavLink activeClassName="nav-active" to="/smurf-form">Smurf Builder</NavLink>
    </div>
  );
};

export default Navbar;
