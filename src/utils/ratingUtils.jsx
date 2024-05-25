import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export const formatRating = (rating) => {
  if (rating === 0) {
    return "No rating for this product.";
  }

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span>
      {Array.from({ length: fullStars }, (_, index) => (
        <StarIcon
          key={`full-${index}`}
          style={{
            verticalAlign: "middle",
            stroke: "black",
            strokeWidth: 0.5,
          }}
        />
      ))}
      {hasHalfStar && (
        <StarHalfIcon
          key="half"
          style={{
            verticalAlign: "middle",
            stroke: "black",
            strokeWidth: 0.5,
          }}
        />
      )}
      {Array.from({ length: emptyStars }, (_, index) => (
        <StarOutlineIcon
          key={`empty-${index}`}
          style={{
            verticalAlign: "middle",
            stroke: "black",
            strokeWidth: 0.5,
          }}
        />
      ))}
    </span>
  );
};
