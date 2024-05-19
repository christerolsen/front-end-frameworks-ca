import React from "react";
import Container from "../Container";

const Product = ({ products }) => {
  if (!Array.isArray(products)) {
    return <p>No products available.</p>;
  }

  return (
    <Container>
      {" "}
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            discountedPrice={product.discountedPrice}
            rating={product.rating}
          />
        ))}
      </div>
    </Container>
  );
};

export default Product;
