// /src/pages/CheckoutPage/index.jsx

import React from "react";
import Cart from "../../components/Cart";
import Container from "../../components/Container";

const CheckoutPage = () => {
  document.title = "Checkout | eComify";

  return (
    <>
      <Container>
        <h1>Checkout</h1>

        <Cart />
      </Container>
    </>
  );
};

export default CheckoutPage;
