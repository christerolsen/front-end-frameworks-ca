import React from "react";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = () => {
  return (
    <IconButton color="inherit" aria-label="cart">
      <ShoppingCartIcon />
    </IconButton>
  );
};

export default CartIcon;
