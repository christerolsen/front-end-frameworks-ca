import React from "react";
import Container from "../Container";

const Product = ({ product }) => {
  if (!product) {
    return <p>No product available</p>;
  }

  console.log("Product: ", product);

  const { title, description, image } = product;

  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image?.url} alt={title} />
      </div>
    </Container>
  );
};

export default Product;
