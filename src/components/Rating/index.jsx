// /src/components/Rating/index.jsx

import React from "react";
import { RatingStars, Star } from "./styled.jsx";

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star key={i} filled={i <= rating}>
        ★
      </Star>
    );
  }
  return <RatingStars>{stars}</RatingStars>;
};

export default Rating;
