import React, { useState } from "react";
import Button from "../Button";
import { useCartContext } from "../../context/CartContext";
import {
  ProductContainer,
  ProductTitle,
  ProductImage,
  ProductDetails,
  ProductPrice,
  SaleBadge,
  ProductRating,
  ProductReviews,
} from "./styled.jsx";
import { formatRating } from "../../utils/ratingUtils";
import { formatPrice } from "../../utils/priceUtils.js";
import Rating from "../Rating/index.jsx";

const Product = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return <p>No product available</p>;
  }

  const { addItem } = useCartContext();

  const { title, description, image, rating, price, discountedPrice, reviews } =
    product;

  const formattedRating = formatRating(rating);
  const { formattedPrice, discount } = formatPrice(price, discountedPrice);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
  };

  return (
    <ProductContainer>
      <ProductImage imageUrl={image?.url} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDetails>
        <ProductRating>{formattedRating}</ProductRating>
        <h2>Description:</h2>
        <p>{description}</p>
        <p></p>
        <ProductPrice>
          Price: {formattedPrice}
          {discount && <SaleBadge>{discount}</SaleBadge>}
          <Button
            variant="primary"
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? "Added" : "Add to Cart"}
          </Button>
        </ProductPrice>
      </ProductDetails>
      <ProductReviews>
        <h2>Reviews:</h2>
        {product.reviews?.length ? (
          <ul>
            {product.reviews.map((review) => (
              <li key={review.id}>
                <p>
                  <b>Username:</b> {review.username}
                </p>
                <div>
                  <b>Rating:</b> <Rating rating={review.rating} />
                </div>
                <p>
                  <b>Description:</b> {review.description}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </ProductReviews>
    </ProductContainer>
  );
};

export default Product;
