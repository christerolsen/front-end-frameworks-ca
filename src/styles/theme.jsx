// theme.jsx
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#2C3E50", // Dark Blue Grey
    secondary: "#18BC9C", // Turquoise
    accent: "#E74C3C", // Soft Red
    background: "#ECF0F1", // Light Grey
    error: "#E74C3C", // Soft Red (Same as accent for consistency)
    success: "#00A946", // Soft Green
    disabled: "#BDC3C7", // Grey Blue
    black: "#2C3E50", // Dark Blue Grey (Same as primary for consistency)
    white: "#FFFFFF", // Pure White
    grey: "#95A5A6", // Soft Grey
  },

  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif",
    cta: "Montserrat, sans-serif",
  },

  borders: {
    small: "1px solid",
    regular: "2px solid",
    large: "4px solid",
    dotted: "2px dotted",
  },

  borderRadius: {
    small: "8px",
    regular: "16px",
    image: "32px",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
