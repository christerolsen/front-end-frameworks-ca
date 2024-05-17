import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 1rem;
  display: flex;
  align-item: center;
  justify-content: space-evenly;
  font-size: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
`;
