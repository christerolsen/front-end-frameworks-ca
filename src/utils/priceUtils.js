// /src/utils/priceUtils.js

export const formatPrice = (price, discountedPrice) => {
  if (price === undefined || discountedPrice === undefined) {
    return {
      formattedPrice: "$0.00",
      discount: null,
    };
  }

  if (discountedPrice < price) {
    const discountPercentage = ((price - discountedPrice) / price) * 100;
    return {
      formattedPrice: `$${discountedPrice.toFixed(2)}`,
      discount: `${discountPercentage.toFixed(0)}% OFF!`,
    };
  }

  return { formattedPrice: `$${price.toFixed(2)}`, discount: null };
};
