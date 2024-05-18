export const formatPrice = (price, discountedPrice) => {
  if (discountedPrice < price) {
    const discountPercentage = ((price - discountedPrice) / price) * 100;
    return {
      formattedPrice: `$${discountedPrice.toFixed(2)}`,
      discount: `${discountPercentage.toFixed(0)}% OFF!`,
    };
  }
  return { formattedPrice: `$${price.toFixed(2)}`, discount: null };
};
