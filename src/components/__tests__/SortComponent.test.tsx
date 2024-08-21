import { render, screen, fireEvent } from "@testing-library/react";
import SortComponent from "../SortComponent";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("SortComponent", () => {
  it("renders with default sort option", () => {
    render(
      <Provider store={store}>
        <SortComponent />
      </Provider>
    );

    const selectElement = screen.getByRole("combobox", { name: /Sort By/i });

    expect(selectElement).toHaveTextContent("Episode");
  });

  it("changes sort option when selected", () => {
    render(
      <Provider store={store}>
        <SortComponent />
      </Provider>
    );

    fireEvent.mouseDown(screen.getByRole("combobox", { name: /Sort By/i }));

    fireEvent.click(screen.getByText("Rating"));

    expect(
      screen.getByRole("combobox", { name: /Sort By/i })
    ).toHaveTextContent("Rating");
  });
});
