// /src/components/ProductList/ProductCard/index.jsx

import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardDetails,
  ProductCardPrice,
  SaleBadge,
  ProductCardRating,
} from "./styled";
import { formatPrice } from "../../../utils/priceUtils";
import { formatRating } from "../../../utils/ratingUtils";

const ProductCard = ({ image, title, price, discountedPrice, rating, id }) => {
  const { formattedPrice, discount } = formatPrice(price, discountedPrice);
  const formattedRating = formatRating(rating);

  return (
    <ProductCardContainer>
      <ProductCardImage src={image.url} alt={title} />
      <ProductCardDetails>
        <h2>{title}</h2>
        <ProductCardRating>{formattedRating}</ProductCardRating>
        <ProductCardPrice>
          {formattedPrice}
          {discount && <SaleBadge>{discount}</SaleBadge>}
        </ProductCardPrice>
      </ProductCardDetails>
      <Link to={`/product/${id}`}>
        <Button variant="primary">View Product</Button>
      </Link>
    </ProductCardContainer>
  );
};

export default ProductCard;
