import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  max-width: 1000px;
  margin-inline: auto;
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 0;
  padding-top: 75%; /* This creates an aspect ratio of 4:3 */
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.regular};
  align-self: flex-end;
  margin-bottom: 1.5rem;
`;

export const ProductTitle = styled.h1`
  width: 100%;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`;

export const ProductRating = styled.p`
  color: ${({ theme }) => theme.colors.primary};

  & span {
    color: #ffd700; /* Gold */
  }
`;

export const SaleBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.2rem 0.5rem;
  border: ${({ theme }) => theme.borders.regular}
    ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
`;

export const ProductPrice = styled.h3`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

export const ProductReviews = styled.div`
  margin-top: 2rem;
`;
