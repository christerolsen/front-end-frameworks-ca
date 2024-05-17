// theme.jsx
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#C49054" /* Brown */,
    secondary: "#EB4754" /* Red */,
    accent: "#6895BA" /* Light Blue */,
    background: "#EDF1F2" /* White */,
    error: "#EB4754" /* Red */,
    success: "#54A770" /* Green */,
    disabled: "#9E9E9E" /* Gray */,
    black: "#1C1820" /* Black */,
    white: "#EDF1F2" /* White */,
    grey: "#BDBDBD" /* Light Gray */,
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
    small: "0px 2px 4px rgba(0, 0, 0, 0.05)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
