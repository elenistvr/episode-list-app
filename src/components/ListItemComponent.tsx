import React from "react";
import { ButtonBase, Grid, Typography, ListItem } from "@mui/material";
import { Episode } from "../redux/interfaces";
import { getAverageRating } from "../utils/ratings";
import romanize from "romanize";
import StarRating from "./StarRatingComponent"; 

interface ListItemComponentProps {
  episode: Episode;
  selected: boolean;
  onSelect: (episode: Episode) => void;
}

const ListItemComponent: React.FC<ListItemComponentProps> = ({
  episode,
  selected,
  onSelect,
}) => {
  const averageRating = getAverageRating(episode);

  return (
    <ListItem
      selected={selected}
      sx={{
        paddingY: 2,
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <ButtonBase
        component="div"
        onClick={() => onSelect(episode)}
        style={{ width: "100%", textAlign: "left" }}
        disableRipple
      >
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={3} sm={2}>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ whiteSpace: "nowrap" }}
            >
              EPISODE {episode.episodeID}
            </Typography>
          </Grid>
          <Grid item xs={5} sm={5}>
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{ whiteSpace: "nowrap", marginRight: 1 }}
            >
              Episode {romanize(episode.episodeID)} - {episode.title}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={1}>
            <StarRating rating={averageRating} />
          </Grid>
          <Grid
            item
            xs={2}
            sm={4}
            sx={{
              textAlign: "right",
              whiteSpace: "nowrap",
            }}
          >
            <Typography variant="body2" color="textSecondary">
              {episode.releaseDate}
            </Typography>
          </Grid>
        </Grid>
      </ButtonBase>
    </ListItem>
  );
};

export default ListItemComponent;
