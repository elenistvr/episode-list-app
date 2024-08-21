export interface OMDBRating {
  Source: string;
  Value: string;
}

export interface OMDBData {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: OMDBRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface Episode {
  id: string;
  episodeID: number;
  title: string;
  releaseDate: string;
  openingCrawl: string;
  director: string;
  producers: string[];
  omdbData?: OMDBData;
}

export interface EpisodeState {
  episodes: Episode[];
  selectedEpisode: Episode | null;
  filter: string;
  sortBy: "year" | "episode" | "rating";
}
