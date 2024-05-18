// GlobalStyle.jsx

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100dvh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }

body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.black};
}

h1, h2, h3, h4, h5, h6 {
    margin: 0 0 0.5em 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
}

p {
    margin: 0 0 1em 0;
    color: inherit;
}

a {
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.cta};
    color: inherit;
}

ul {
    list-style: none;
    padding: 0;
}

`;

export default GlobalStyle;
