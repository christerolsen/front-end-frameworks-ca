import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 1rem;
  font-size: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;
