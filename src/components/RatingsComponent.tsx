import React from "react";
import { Chip, Box } from "@mui/material";
import { ratingSources } from "../constants/ratings";
import { getNormalizedRating } from "../utils/ratings";
import { OMDBData } from "../redux/interfaces";

interface RatingsComponentProps {
  omdbData: OMDBData;
}

const RatingsComponent: React.FC<RatingsComponentProps> = ({ omdbData }) => {
  const ratings = ratingSources.map(({ source, label }) => {
    const ratingValue = omdbData?.Ratings?.find(
      (rating) => rating.Source === source
    )?.Value;

    return {
      label,
      value: ratingValue ? getNormalizedRating(source, ratingValue) : null,
    };
  });

  return (
    <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
      {ratings.map(
        (rating, index) =>
          rating.value !== null && (
            <Chip
              key={index}
              label={`${rating.label}: ${rating.value}`}
              variant="outlined"
              color="primary"
            />
          )
      )}
    </Box>
  );
};

export default RatingsComponent;
