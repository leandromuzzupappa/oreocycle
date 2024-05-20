import { render, screen } from "@testing-library/react";
import Homepage from "@app/page";

describe("Homepage", () => {
  it("should render the title", () => {
    render(<Homepage />);
    expect(screen.getByText("Pepitos")).toBeInTheDocument();
  });

  it("should not render the title oreos", () => {
    render(<Homepage />);
    expect(screen.queryByText("Oreos")).not.toBeInTheDocument();
  });
});
