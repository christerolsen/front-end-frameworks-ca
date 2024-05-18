import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout">
            <Route index element={<CheckoutPage />} />
            <Route path="success" element={<CheckoutSuccessPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
