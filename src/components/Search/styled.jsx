// /src/components/Search/styled.jsx

import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  padding: 1rem;
  width: 500px;
  font-size: 1rem;
  border: ${({ theme }) => theme.borders.regular}
    ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
