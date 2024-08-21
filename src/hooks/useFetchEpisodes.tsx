import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEpisodesFromSWAPI } from "../api/swapi";
import { fetchEpisodeDetailsFromOMDB } from "../api/omdb";
import { setEpisodes } from "../redux/episodesSlice";
import { Episode } from "../redux/interfaces";

export const useFetchEpisodes = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        const swapiEpisodes = await fetchEpisodesFromSWAPI();

        const omdbPromises = swapiEpisodes.map((episode: Episode) =>
          fetchEpisodeDetailsFromOMDB(episode.title)
        );

        const omdbData = await Promise.all(omdbPromises);

        const episodesWithOMDBData: Episode[] = swapiEpisodes.map(
          (episode: Episode, index: number) => ({
            ...episode,
            omdbData: omdbData[index],
          })
        );

        dispatch(setEpisodes(episodesWithOMDBData));
        setLoading(false);
      } catch {
        setError("Failed to fetch data from APIs");
        setLoading(false);
      }
    };

    loadEpisodes();
  }, [dispatch]);

  return { loading, error };
};
