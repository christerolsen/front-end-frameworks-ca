// /src/components/Cart/CartList/CartItem/index.jsx

import React from "react";
import { useCartContext } from "../../../../context/CartContext.jsx";
import { Link } from "react-router-dom";
import {
  CartItemContainer,
  CartItemDetails,
  CartItemTitle,
  CartItemPrice,
  CartItemDiscount,
  CartItemQuantity,
  CartItemTotal,
  QuantityButton,
  Quantity,
} from "./styled.jsx";
import { formatPrice } from "../../../../utils/priceUtils.js";

const CartItem = ({ item }) => {
  const { addItem, removeItem } = useCartContext();
  const { title, id, price, discountedPrice, quantity } = item;
  const { formattedPrice, discount } = formatPrice(price, discountedPrice);
  const total = discountedPrice * quantity;

  return (
    <CartItemContainer>
      <CartItemDetails>
        <Link to={`/product/${id}`}>
          <CartItemTitle>{title}</CartItemTitle>
        </Link>
        <CartItemPrice>Per item: {discountedPrice}</CartItemPrice>
        {discount && <CartItemDiscount>{discount}</CartItemDiscount>}
      </CartItemDetails>

      <CartItemQuantity>
        <QuantityButton onClick={() => removeItem(item.id)}>-</QuantityButton>
        <Quantity>{quantity}</Quantity>
        <QuantityButton onClick={() => addItem(item)}>+</QuantityButton>
      </CartItemQuantity>
      <CartItemTotal>Total: {total}</CartItemTotal>
    </CartItemContainer>
  );
};

export default CartItem;
