export const fetchEpisodesFromSWAPI = async () => {
  const response = await fetch("https://swapi.dev/api/films/?format=json");
  const data = await response.json();
  return data.results.map((film: any) => ({
    id: film.episode_id,
    episodeID: film.episode_id,
    title: film.title,
    releaseDate: film.release_date,
    openingCrawl: film.opening_crawl,
    director: film.director,
    producers: film.producer.split(", "),
  }));
};
