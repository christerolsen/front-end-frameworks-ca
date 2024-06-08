// /src/components/Cart/CartList/CartItem/styled.jsx

import styled from "styled-components";
import Button from "../../../Button";

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-bottom: ${({ theme }) => theme.borders.small};

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
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
  padding: 1rem;
`;

export const CartItemTotal = styled.div`
  font-weight: bold;
`;
