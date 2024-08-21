import episodesReducer, {
  setEpisodes,
  selectEpisode,
  setFilter,
  setSortBy,
} from "../episodesSlice";
import { Episode } from "../interfaces";

const sampleEpisode: Episode = {
  id: "1",
  episodeID: 4,
  title: "A New Hope",
  releaseDate: "1977-05-25",
  openingCrawl: "It is a period of civil war...",
  director: "George Lucas",
  producers: ["Gary Kurtz", "Rick McCallum"],
};

describe("episodesSlice", () => {
  it("should handle initial state", () => {
    const initialState = {
      episodes: [],
      selectedEpisode: null,
      filter: "",
      sortBy: "episode" as "episode" | "year" | "rating",
    };

    expect(episodesReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle setEpisodes", () => {
    const previousState = {
      episodes: [],
      selectedEpisode: null,
      filter: "",
      sortBy: "episode" as "episode" | "year" | "rating",
    };

    const newState = episodesReducer(
      previousState,
      setEpisodes([sampleEpisode])
    );

    expect(newState.episodes).toEqual([sampleEpisode]);
  });

  it("should handle selectEpisode", () => {
    const previousState = {
      episodes: [sampleEpisode],
      selectedEpisode: null,
      filter: "",
      sortBy: "episode" as "episode" | "year" | "rating",
    };

    const newState = episodesReducer(
      previousState,
      selectEpisode(sampleEpisode)
    );

    expect(newState.selectedEpisode).toEqual(sampleEpisode);
  });

  it("should handle setFilter", () => {
    const previousState = {
      episodes: [sampleEpisode],
      selectedEpisode: sampleEpisode,
      filter: "",
      sortBy: "episode" as "episode" | "year" | "rating",
    };

    const newState = episodesReducer(previousState, setFilter("hope"));

    expect(newState.filter).toEqual("hope");
    expect(newState.selectedEpisode).toBeNull();
  });

  it("should handle setSortBy", () => {
    const previousState = {
      episodes: [sampleEpisode],
      selectedEpisode: sampleEpisode,
      filter: "",
      sortBy: "episode" as "episode" | "year" | "rating",
    };

    const newState = episodesReducer(previousState, setSortBy("year"));

    expect(newState.sortBy).toEqual("year");
  });
});
