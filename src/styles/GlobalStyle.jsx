// GlobalStyle.jsx

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


html {
    height: 100%;
}

body {
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
}

`;

export default GlobalStyle;
