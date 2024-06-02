// /src/components/Error/styled.jsx

import styled from "styled-components";

export const ErrorContainer = styled.div`
  color: ${({ theme }) => theme.colors.error};
  padding: 1rem;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  margin: 0;
`;
