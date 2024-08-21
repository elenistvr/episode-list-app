import React, { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEpisode } from "../redux/episodesSlice";
import { RootState } from "../redux/store";
import { List, Box, Typography, Divider } from "@mui/material";
import { getAverageRating } from "../utils/ratings";
import ListItemComponent from "./ListItemComponent";
import { Episode } from "../redux/interfaces";

const ListComponent: React.FC = () => {
  const dispatch = useDispatch();
  const episodes = useSelector((state: RootState) => state.episodes.episodes);
  const filter = useSelector((state: RootState) => state.episodes.filter);
  const sortBy = useSelector((state: RootState) => state.episodes.sortBy);
  const selectedEpisode = useSelector(
    (state: RootState) => state.episodes.selectedEpisode
  );

  const filteredEpisodes = useMemo(() => {
    return episodes
      .filter((episode) =>
        episode.title.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "year") {
          return (
            new Date(a.releaseDate).getFullYear() -
            new Date(b.releaseDate).getFullYear()
          );
        } else if (sortBy === "rating") {
          const aAverageRating = getAverageRating(a) || 0;
          const bAverageRating = getAverageRating(b) || 0;
          return bAverageRating - aAverageRating;
        } else {
          return a.episodeID - b.episodeID;
        }
      });
  }, [episodes, filter, sortBy]);

  const handleSelectEpisode = useCallback(
    (episode: Episode) => dispatch(selectEpisode(episode)),
    [dispatch]
  );

  return (
    <>
      {filteredEpisodes.length > 0 ? (
        <List>
          {filteredEpisodes.map((episode, index) => (
            <React.Fragment key={episode.id}>
              <ListItemComponent
                episode={episode}
                selected={selectedEpisode?.id === episode.id}
                onSelect={handleSelectEpisode}
              />
              {index < filteredEpisodes.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      ) : (
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6" color="textSecondary" align="center">
            No episodes found
          </Typography>
        </Box>
      )}
    </>
  );
};

export default ListComponent;
