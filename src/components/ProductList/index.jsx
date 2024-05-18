import React from "react";
import ProductCard from "./ProductCard";
import { ProductListContainer } from "./styled";

const ProductList = ({ products }) => {
  if (!Array.isArray(products)) {
    return <p>No products available.</p>;
  }

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          discountedPrice={product.discountedPrice}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
