import { render, screen } from "@testing-library/react";
import { A1Link } from "@atoms/A1Link";

describe("A1Link", () => {
  it("renders A1Link component", () => {
    render(<A1Link label="Test Link" url="/test" newTab={true} />);

    const linkElement = screen.getByText("Test Link");
    expect(linkElement).toBeInTheDocument();
  });

  it("renders A1Link component without new tab", () => {
    render(<A1Link label="Test Link" url="/test" newTab={false} />);

    const linkElement = screen.getByText("Test Link");
    expect(linkElement).not.toHaveAttribute("target", "_blank");
  });
});
