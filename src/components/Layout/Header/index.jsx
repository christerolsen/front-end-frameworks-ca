// /src/components/Layout/Header/index.jsx

import React from "react";
import { StyledHeader } from "./styled";
import Navbar from "./Navbar";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <CartIcon />
    </StyledHeader>
  );
};

export default Header;
