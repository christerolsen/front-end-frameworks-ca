import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  margin: 0 auto;
  border: ${({ theme }) => theme.borders.large}
    ${({ theme }) => theme.colors.background};
  border-top: ${({ theme }) => theme.borders.large}
    ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`;
