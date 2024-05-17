import React from "react";
import { Link } from "react-router-dom";
import { Nav, Logo, NavUl, NavItem, StyledLink } from "./styled";
import CartIcon from "../CartIcon";

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">
        <Logo>eComify</Logo>
      </StyledLink>
      <NavUl>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavItem>
      </NavUl>
    </Nav>
  );
};

export default Navbar;
