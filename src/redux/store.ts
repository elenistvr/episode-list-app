import { configureStore } from "@reduxjs/toolkit";
import episodesReducer, { EpisodesState } from "./episodesSlice";

const store = configureStore({
  reducer: {
    episodes: episodesReducer,
  },
});

export type RootState = {
  episodes: EpisodesState;
};
export type AppDispatch = typeof store.dispatch;

export default store;
