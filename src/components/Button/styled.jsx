import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.cta};
  cursor: pointer;

  ${({ theme, variant, disabled }) => {
    switch (variant) {
      case "secondary":
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.background};
            color: ${theme.colors.secondary};
            text-decoration: underline;
          }
        `;
      case "accent":
        return `
          background-color: ${theme.colors.accent};
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.background};
            color: ${theme.colors.accent};
            text-decoration: underline;
          }
        `;
      case "disabled":
        return `
          background-color: ${theme.colors.disabled};
          color: ${theme.colors.grey};
          cursor: not-allowed;
        `;
      default:
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.background};
            color: ${theme.colors.primary};
            text-decoration: underline;
          }
        `;
    }
  }}
`;
