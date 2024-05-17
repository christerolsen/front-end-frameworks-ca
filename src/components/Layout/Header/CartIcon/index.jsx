import React from "react";
import { StyledNavLink } from "./styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = () => {
  return (
    <StyledNavLink to="/cart">
      <ShoppingCartIcon />
    </StyledNavLink>
  );
};

export default CartIcon;
