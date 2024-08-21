import { Episode, OMDBRating } from "../redux/interfaces";

export const getNormalizedRating = (
  source: string,
  value: string
): number | null => {
  if (source === "Internet Movie Database") {
    return parseFloat(value.split("/")[0]);
  } else if (source === "Rotten Tomatoes") {
    return parseFloat(value.replace("%", "")) / 10;
  } else if (source === "Metacritic") {
    return parseFloat(value.split("/")[0]) / 10;
  }
  return null;
};

export const getAverageRating = (episode: Episode): number | null => {
  const imdbRating = episode?.omdbData?.Ratings?.find(
    (rating: OMDBRating) => rating.Source === "Internet Movie Database"
  )?.Value;

  const metacriticRating = episode?.omdbData?.Ratings?.find(
    (rating: OMDBRating) => rating.Source === "Metacritic"
  )?.Value;

  const rottenTomatoesRating = episode?.omdbData?.Ratings?.find(
    (rating: OMDBRating) => rating.Source === "Rotten Tomatoes"
  )?.Value;

  const ratings = [
    imdbRating ? parseFloat(imdbRating.split("/")[0]) : null,
    metacriticRating ? parseFloat(metacriticRating.split("/")[0]) / 10 : null,
    rottenTomatoesRating
      ? parseFloat(rottenTomatoesRating.replace("%", "")) / 10
      : null,
  ].filter((rating) => rating !== null) as number[];

  return ratings.length > 0
    ? ratings.reduce((a, b) => a + b, 0) / ratings.length
    : null;
};
