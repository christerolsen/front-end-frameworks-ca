// /src/components/Cart/CartList/CartItem/styled.jsx

import styled from "styled-components";
import Button from "../../../Button";

export const CartItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  border-bottom: ${({ theme }) => theme.borders.small};
`;

export const CartItemDetails = styled.div``;

export const CartItemTitle = styled.h4``;

export const CartItemPrice = styled.p``;

export const CartItemDiscount = styled.p`
  color: red;
`;

export const CartItemQuantity = styled.div``;

export const QuantityButton = styled(Button)``;

export const Quantity = styled.span`
  margin: 0.25rem;
  font-weight: bold;
`;

export const CartItemTotal = styled.div`
  width: 100px;
`;
