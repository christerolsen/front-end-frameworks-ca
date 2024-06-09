// /src/components/Cart/index.jsx

import React from "react";
import { useCartContext } from "../../context/CartContext";
import CartList from "./CartList";

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <CartList items={cart} />
    </div>
  );
};

export default Cart;
