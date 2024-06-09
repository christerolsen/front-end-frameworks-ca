# Front-end Frameworks Course Assignment

![image](/src/assets/demostration_gif.gif)

eComify is a responsive e-commerce web application built with React and Vite. The app allows users to browse products, view detailed product information, manage a shopping cart, and complete a fictional purchase. The project leverages React Router for client-side routing, styled-components for styling, and integrates with an external API to fetch product data.

## Goal

To apply knowledge of React to build an eCom store.

## Deployment
[![Netlify Status](https://api.netlify.com/api/v1/badges/8b832450-0e41-41e7-a807-bdef07cc46f6/deploy-status)](https://app.netlify.com/sites/ecomify-a-front-end-frameworks-ca/deploys)

- [Live site](https://ecomify-a-front-end-frameworks-ca.netlify.app)

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

- **Checkout Page:**

  - Lists all products added to the cart.
  - Displays the total price of the items in the cart.
  - Includes a "Checkout" button to proceed to the checkout process.

- **Checkout Success Page:**

  - Notifies the user of a successful order.
  - Provides a link to return to the homepage.
  - Clears the cart upon successful checkout.

- **Contact Page:**

  - Contains a contact form with fields for full name, subject, email, and message body.
  - Validates input fields to ensure they meet specified requirements.
  - Logs form data to the console upon successful submission.

- **Not Found Page:**

  - Displays a 404 error message for any undefined routes.
  - Provides a link to return to the homepage.

### Components

- **Button:**

  - A reusable buttom component styled with styled-components.

- **Cart:**

  - _CartList:_

    - A list component to display multiple cart items.
    - Manages the rendering of individual cart items.
    - Provides a summary of the total cost.
    - Proved a button for checkout.

  - _CartItem:_
    - Represents a single item in the cart.
    - Displays item details and allows for quantity adjustments or removal.

- **ContactForm:**

  - A form component for submitting user inquiries.
  - Includes validation for required fields.

- **Container:**

  - A layout component to wrap and center content on the page.

- **Error:**

  - Displays error messages to the user.
  - Used for showing error in various parts of the application.

- **Layout:**

  - A layout component that includes _Header_, _Footer_, and _Main_ sections.

  - _Header:_

    - Contains navigation links and the cart icon.
    - Includes sub-components like _CartIcon_ and _Navbar_.

  - _Footer:_

    - Contains footer information.

  - _Main:_
    - Wraps the main content of the application.

- **Loader:**

  - A loading spinner component to indicate data fetching.

- **Product:**

  - Displays individual product details.
  - Includes an "Add to Cart" button.

- **ProductList:**

  - A list component to display multiple products.
  - Manages the rendering of individual product cards.

  - _ProductCard:_
    - Represents a single product in the list.
    - Displays product details and a link to the product specific page.

- **Rating:**

  - Displays the product rating.
  - Allows users to see the product ratings with comments.

- **Search:**
  - A search component to filter products by name.
  - Includes a look-ahead feature to show matching results as the user types in.

### Context

- **CartContext:**
  - Provides a context to manage the state of the shopping cart.
  - Includes a _CartProvider_ component to wrap the application and provide the cart context.

### Hooks

- **useApi:***

  - Custom hook to fetch data from an API endpoint.
  - Manages loading and error states.

- **useCart:**

  - Custom hook to manage actions related to the shopping cart.
  - Includes functions to add, remove, and clear items from the cart.

- **useLocalStorage:**
  - Custom hook to manage localStorage.
  - Provides a way to store and retrieve values from localStorage.

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
