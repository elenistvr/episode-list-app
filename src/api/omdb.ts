import { OMDBData } from "../redux/interfaces";

export const fetchEpisodeDetailsFromOMDB = async (
  title: string
): Promise<OMDBData> => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  if (!apiKey) {
    throw new Error("API key is missing");
  }
  const response = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`
  );
  const data: OMDBData = await response.json();
  return data;
};
