import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Episode } from "./interfaces";

export interface EpisodesState {
  episodes: Episode[];
  selectedEpisode: Episode | null;
  filter: string;
  sortBy: "year" | "episode" | "rating";
}

const initialState: EpisodesState = {
  episodes: [],
  selectedEpisode: null,
  filter: "",
  sortBy: "episode",
};

const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    setEpisodes(state, action: PayloadAction<Episode[]>) {
      state.episodes = action.payload;
    },
    selectEpisode(state, action: PayloadAction<Episode>) {
      state.selectedEpisode = action.payload;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
      state.selectedEpisode = null;
    },
    setSortBy(state, action: PayloadAction<"year" | "episode" | "rating">) {
      state.sortBy = action.payload;
    },
  },
});

export const { setEpisodes, selectEpisode, setFilter, setSortBy } =
  episodesSlice.actions;

export default episodesSlice.reducer;
