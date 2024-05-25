import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/theme.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Theme>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Theme>
    </CartProvider>
  </React.StrictMode>
);
