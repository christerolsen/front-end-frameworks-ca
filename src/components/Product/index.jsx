import React, { useState } from "react";
import Container from "../Container";
import Button from "../Button";
import { useCartContext } from "../../context/CartContext";

const Product = ({ product }) => {
  if (!product) {
    return <p>No product available</p>;
  }

  const { addItem } = useCartContext();

  const { title, description, image } = product;

  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image?.url} alt={title} />
        <Button variant="primary" onClick={() => addItem(product)}>
          Add to Cart
        </Button>
      </div>
    </Container>
  );
};

export default Product;
