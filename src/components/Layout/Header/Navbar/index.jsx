// /src/components/Layout/Header/Navbar/index.jsx

import React from "react";
import { Nav, Logo, NavUl, NavItem, StyledLink } from "./styled";
import LogoIcon from "@mui/icons-material/Storefront";

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="./">
        <Logo>
          <LogoIcon />
          <span>eComify</span>
        </Logo>
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
