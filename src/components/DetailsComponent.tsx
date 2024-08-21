import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box, Typography, Grid, Chip } from "@mui/material";
import romanize from "romanize";
import { ratingSources } from "../constants/ratings";
import { getAverageRating, getNormalizedRating } from "../utils/ratings";
import StarRating from "./StarRatingComponent";

interface DetailsComponentProps {
  listLoaded: boolean;
}

const DetailsComponent: React.FC<DetailsComponentProps> = ({ listLoaded }) => {
  const selectedEpisode = useSelector(
    (state: RootState) => state.episodes.selectedEpisode
  );

  const averageRating = useMemo(() => {
    return selectedEpisode ? getAverageRating(selectedEpisode) : null;
  }, [selectedEpisode]);

  const ratings = ratingSources.map(({ source, label }) => {
    const ratingValue = selectedEpisode?.omdbData?.Ratings?.find(
      (rating) => rating.Source === source
    )?.Value;

    return {
      label,
      value: ratingValue ? getNormalizedRating(source, ratingValue) : null,
    };
  });

  return (
    <Box sx={{ padding: 2, height: "100%" }}>
      {listLoaded && !selectedEpisode ? (
        <Typography variant="h5" color="textSecondary" align="center">
          Please select an episode to see the details.
        </Typography>
      ) : selectedEpisode ? (
        <>
          <Typography variant="h5" sx={{ marginBottom: 2, textAlign: "left" }}>
            EPISODE {romanize(selectedEpisode.episodeID)} -{" "}
            {selectedEpisode.title}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              {selectedEpisode.omdbData?.Poster &&
                selectedEpisode.omdbData.Poster !== "N/A" && (
                  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <img
                      src={selectedEpisode.omdbData.Poster}
                      alt={`${selectedEpisode.title} Poster`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                )}
            </Grid>

            <Grid item xs={12} sm={8}>
              <Typography variant="body1">
                {selectedEpisode.openingCrawl}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  Directed by: {selectedEpisode.director}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body2">Average Rating:</Typography>
                  <StarRating rating={averageRating} />
                </Box>
                <Box sx={{ display: "flex", gap: 1, marginTop: 1 }}>
                  {ratings.map(
                    (rating, index) =>
                      rating.value !== null && (
                        <Chip
                          key={index}
                          label={`${rating.label}: ${
                            (rating.value) * 10
                          }%`}
                          variant="outlined"
                          color="primary"
                        />
                      )
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : null}
    </Box>
  );
};

export default DetailsComponent;
