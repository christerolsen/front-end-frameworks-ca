// /src/pages/CheckoutSuccessPage/index.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CheckoutSuccessPage = () => {
  const { clearCart } = useCartContext();
  document.title = "eComify | Success";

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <h1>Order Successful!</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/">Go back to the store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
