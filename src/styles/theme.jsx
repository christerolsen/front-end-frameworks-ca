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
    regular: "1px solid #d1d8e0",
  },

  borderRadius: {
    small: "6px",
    regular: "10px",
    image: "50%",
  },

  shadows: {
    small: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.3)",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
