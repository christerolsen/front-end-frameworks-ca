// /src/context/CartContext.jsx

import React, { createContext, useContext } from "react";
import { useCart } from "../hooks/useCart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addItem, removeItem, clearCart } = useCart();

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
