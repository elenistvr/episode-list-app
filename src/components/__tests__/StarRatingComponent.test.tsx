import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StarRatingComponent from "../StarRatingComponent";

describe("StarRating Component", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(<StarRatingComponent rating={5} />);
    expect(getByRole("img")).toBeTruthy();
  });

  it("displays the correct number of stars", () => {
    const { getByRole } = render(<StarRatingComponent rating={5} />);
    const rating = getByRole("img");
    expect(rating.getAttribute("aria-label")).toContain("5");
  });

  it("handles null ratings", () => {
    const { getByRole } = render(<StarRatingComponent rating={null} />);
    const rating = getByRole("img");
    expect(rating.getAttribute("aria-label")).toContain("0");
  });
});
