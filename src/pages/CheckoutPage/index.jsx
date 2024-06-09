// /src/pages/CheckoutPage/index.jsx

import React from "react";
import Cart from "../../components/Cart";
import Container from "../../components/Container";

const CheckoutPage = () => {
  document.title = "eComify | Cart";

  return (
    <>
      <Container>
        <h1>Cart</h1>

        <Cart />
      </Container>
    </>
  );
};

export default CheckoutPage;
