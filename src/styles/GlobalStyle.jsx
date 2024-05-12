// GlobalStyle.jsx

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    /* Colors */
    --color-primary: #C49054; /* Brown */
    --color-secondary: #EB4754; /* Red */
    --color-accent: #6895BA; /* Light Blue */
    --color-background: #EDF1F2; /* White */
    --color-error: #EB4754; /* Red */
    --color-success: #54A770; /* Green */
    --color-disabled: #9E9E9E; /* Gray */
    --color-black: #1C1820; /* Black */
    --color-white: #EDF1F2; /* White */
    --color-grey: #BDBDBD; /* Light Gray */

    /* Fonts */
    --font-heading: "Poppins", sans-serif;
    --font-body: "Roboto", sans-serif;
    --font-cta: "Montserrat", sans-serif;
}

html {
    height: 100%;
}

body {
    height: 100%;
    background: var(--color-background);
    color: var(--color-black);
}

`;

export default GlobalStyle;
