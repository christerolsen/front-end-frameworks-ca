// theme.jsx
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    accent: "var(--color-accent)",
    background: "var(--color-background)",
    error: "var(--color-error)",
    success: "var(--color-success)",
    disabled: "var(--color-disabled)",
    black: "var(--color-black)",
    white: "var(--color-white)",
    grey: "var(--color-grey)",
  },

  fonts: {
    heading: "var(--font-heading)",
    body: "var(--font-body)",
    button: "var(--font-cta)",
  },

  borders: {
    regular: "1px solid #d1d8e0",
  },

  borderRadius: {
    small: "6px",
    regular: "10px",
    image: "50%",
  },

  shadows: {
    small: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
