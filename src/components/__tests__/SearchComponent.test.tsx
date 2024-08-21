import { render, screen, fireEvent } from "@testing-library/react";
import SearchComponent from "../SearchComponent";
import { Provider } from "react-redux";
import store from "../../redux/store";
import ListComponent from "../ListComponent";

describe("SearchbarComponent", () => {
  it("shows no results for unmatched search query", async () => {
    render(
      <Provider store={store}>
        <SearchComponent />
        <ListComponent />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Type to filter...");
    fireEvent.change(input, { target: { value: "unmatched" } });

    const noResultsMessage = await screen.findByText("No episodes found");
    expect(noResultsMessage).toBeInTheDocument();
  });
});
