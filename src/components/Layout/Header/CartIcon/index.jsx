// /src/components/Layout/Header/CartIcon/index.jsx

import React from "react";
import { useCartContext } from "../../../../context/CartContext";
import { StyledNavLink, CartBadge } from "./styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = () => {
  const { cart } = useCartContext();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <StyledNavLink to="/cart">
      <ShoppingCartIcon />
      {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
    </StyledNavLink>
  );
};

export default CartIcon;
