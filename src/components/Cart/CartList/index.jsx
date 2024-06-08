// /src/components/Cart/CartList/index.jsx

import React from "react";
import { useCartContext } from "../../../context/CartContext.jsx";
import CartItem from "./CartItem/index.jsx";
import Button from "../../Button/index.jsx";
import { CartListContainer, TotalSum } from "./styled.jsx";

const CartList = () => {
  const { cart } = useCartContext();
  const totalSum = cart
    .reduce((sum, item) => {
      const price = item.discountedPrice ? item.discountedPrice : item.price;
      return sum + price * item.quantity;
    }, 0)
    .toFixed(2);

  return (
    <CartListContainer>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
      <TotalSum>Total Sum: ${totalSum}</TotalSum>
      <Button>Checkout</Button>
    </CartListContainer>
  );
};

export default CartList;
