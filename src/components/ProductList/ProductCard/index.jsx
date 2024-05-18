import React from "react";
import Button from "../../Button";
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardDetails,
  ProductCardTitle,
  ProductCardPrice,
  SaleBadge,
} from "./styled";
import { formatPrice } from "../../../utils/priceUtils";

const ProductCard = ({ image, title, price, discountedPrice }) => {
  const { formattedPrice, discount } = formatPrice(price, discountedPrice);

  return (
    <ProductCardContainer>
      <ProductCardImage src={image.url} alt={title} />
      <ProductCardDetails>
        <ProductCardTitle>{title}</ProductCardTitle>
        <ProductCardPrice>
          {formattedPrice}
          {discount && <SaleBadge> - {discount}</SaleBadge>}
        </ProductCardPrice>
      </ProductCardDetails>
      <Button>View Product</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
