// /src/components/ProductList/ProductCard/styled.jsx

import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 300px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: ${({ theme }) => theme.borders.regular}
    ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  position: relative;

  & a {
    align-self: end;
    margin: 1rem;
  }
`;

export const ProductCardImage = styled.img`
  width: 100%;
  height: 250px;
  opacity: 90%;
`;

export const ProductCardDetails = styled.div`
  height: 100%;
  padding: 1rem;
`;

export const ProductCardPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

export const SaleBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.2rem 0.5rem;
  border: ${({ theme }) => theme.borders.regular}
    ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-left: 0.5rem;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const ProductCardRating = styled.p`
  color: ${({ theme }) => theme.colors.primary};

  & span {
    color: #ffd700; /* Gold */
  }
`;
