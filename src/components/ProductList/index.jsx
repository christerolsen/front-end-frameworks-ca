// /src/components/ProductList/index.jsx

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Search from "../Search";
import { ProductListContainer } from "./styled";

const ProductList = ({ products }) => {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Search query={query} onQueryChange={setQuery} />
      <ProductListContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              discountedPrice={product.discountedPrice}
              rating={product.rating}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ProductListContainer>
    </div>
  );
};

export default ProductList;
