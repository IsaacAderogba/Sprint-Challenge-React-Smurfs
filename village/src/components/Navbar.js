import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavBar>
      <NavLink activeClassName="nav-active" exact to="/">Smurfs</NavLink>
      <NavLink activeClassName="nav-active" to="/smurf-form">Smurf Builder</NavLink>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  height: 10vh;
  background-color: #539dc1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .nav-active {
      font-weight: bold;
      color: white;
      font-size: 20px;
  }

  a {
    color: #eaeaea;
    text-decoration: none;
    font-size: 18px;
  }
`;

export default Navbar;
