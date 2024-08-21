import React from "react";
import { Rating } from "@mui/material";

interface StarRatingProps {
  rating: number | null;
  max?: number;
  size?: "small" | "medium" | "large";
}

const StarRatingComponent: React.FC<StarRatingProps> = ({
  rating,
  max = 10,
  size = "small",
}) => {
  return (
    <Rating
      value={rating !== null ? rating : 0}
      precision={0.1}
      readOnly
      size={size}
      max={max}
    />
  );
};

export default StarRatingComponent;
