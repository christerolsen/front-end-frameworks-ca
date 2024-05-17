# Front-end Frameworks Course Assignment

![image](/public/vite.svg)
_Screenshot of the homepage goes here_

eComify is a responsive e-commerce web application built with React and Vite. The app allows users to browse products, view detailed product information, manage a shopping cart, and complete a fictional purchase. The project leverages React Router for client-side routing, styled-components for styling, and integrates with an external API to fetch product data.

## Goal

To apply knowledge of React to build an eCom store.

## Deplyment

(https://...............)

## Built with

- Vite
- React
- React-Router-DOM
- styled-components
- Material UI Icons (MUI)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repo

```bash
https://github.com/christerolsen/front-end-frameworks-ca.git
```

2. Install the dependencies

```bash
npm install
```

3. Install Material UI Icons

```bash
npm install @mui/icons-material @mui/material @emotion/react @emotion/styled
```

### Running the Application

- To start the development server:

```bash
npm run dev
```

- To build the project:

```bash
npm run build
```

- To preview the built project:

```bash
npm run preview
```

- To link the project:

```bash
npm run lint
```

## Dependencies

- **React:** `^18.2.0`
- **React DOM:** `^18.2.0`
- **React Router DOM:** `^6.23.1`
- **Styled Components:** `^5.3.10`
- **Material UI Icons** `^5.2.0`

## Dev Dependencies

- **@types/react:** `^18.2.66`
- **@types/react-dom:** `^18.2.22`
- **@vitejs/plugin-react:** `^4.2.1`
- **eslint:** `^8.57.0`
- **eslint-plugin-react:** `^7.34.1`
- **eslint-plugin-react-hooks:** `^4.6.0`
- **eslint-plugin-react-refresh:** `^0.4.6`
- **vite:** `^5.2.0`

## Features

### Pages

- **Homepage:**

  - Displays a list of all products.
  - Includes a look-ahead search bar for filtering products by name.
  - Clicking on a product navigates to its detailed product page.

- **Product Page:**

  - Displays details of a single product including title, description, image, price and reviews.
  - Shows discounted price if available, with the discount percentage calculated and displayed.
  - Includes an "Add to Cart" button to add the product to the shopping cart.

- **Cart Page:**

  - Lists all products added to the cart.
  - Displays the total price of the items in the cart.
  - Includes a "Checkout" button to proceed to the checkout process.

- **Checkout Page:**

  - ?????

- **Checkout Success Page:**

  - Notifies the user of a successful order.
  - Provides a link to return to the homepage.
  - Clears the cart upon successful checkout.

- **Contact Page:**

  - Contains a contact form with fields for full name, subject, email, and message body.
  - Validates input fields to ensure they meet specified requirements.
  - Logs form data to the console upon successful submission.

### Components

- **Layout:** Contains the header with navigation, cart icon, and footer.
- **Cart:** Contains....

### Using Material UI Icons

1. **Import the required icon** from the `@mui/icons-material` package.
2. **Use the imported icon** in your component's JSX.

```jsx
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ExampleComponent = () => {
  return (
    <div>
      <HomeIcon />
      <ShoppingCartIcon />
    </div>
  );
};
```

## Contact

https://christerolsen.com
