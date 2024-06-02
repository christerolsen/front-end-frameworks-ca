// /src/components/Layout/Header/styled.jsx

import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom: ${({ theme }) => theme.borders.regular}
    ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;
