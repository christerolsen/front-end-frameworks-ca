import styled from "styled-components";

export const RatingStars = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Star = styled.span`
  color: ${({ filled, theme }) =>
    filled ? theme.colors.primary : theme.colors.grey};
  margin-right: 2px;
`;
