import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { Store } from "redux";
import EpisodeList from "../ListComponent";
import EpisodeDetail from "../DetailsComponent";
import { RootState } from "../../redux/store";

const mockStore = configureStore<RootState>([]);
const initialState: RootState = {
  episodes: {
    episodes: [
      {
        id: "1",
        episodeID: 4,
        title: "A New Hope",
        releaseDate: "1977-05-25",
        openingCrawl: "It is a period of civil war...",
        director: "George Lucas",
        producers: ["Gary Kurtz", "Rick McCallum"],
      },
      {
        id: "2",
        episodeID: 5,
        title: "The Empire Strikes Back",
        releaseDate: "1980-05-21",
        openingCrawl: "It is a dark time for the Rebellion...",
        director: "Irvin Kershner",
        producers: ["Gary Kurtz", "Rick McCallum"],
      },
    ],
    filter: "",
    sortBy: "episode",
    selectedEpisode: null,
  },
};

describe("EpisodeList and EpisodeDetail Integration", () => {
  let store: MockStoreEnhanced<RootState, unknown>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("selects an episode and displays details", () => {
    render(
      <Provider store={store as Store<RootState>}>
        <EpisodeList />
        <EpisodeDetail listLoaded={true} />
      </Provider>
    );

    const episode = screen.getByText(/Episode IV - A New Hope/i);
    expect(episode).toBeInTheDocument();

    fireEvent.click(episode);

    expect(screen.findByText(/Directed by: George Lucas/i)).toBeTruthy();
    expect(screen.findByText(/It is a period of civil war.../i)).toBeTruthy();
  });
});
