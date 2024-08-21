import { render } from "@testing-library/react";
import ToolbarComponent from "../ToolbarComponent";

describe("ToolbarComponent", () => {
  it("renders without crashing", () => {
    const { container } = render(<ToolbarComponent>Test</ToolbarComponent>);
    expect(container).toBeTruthy();
  });
});
