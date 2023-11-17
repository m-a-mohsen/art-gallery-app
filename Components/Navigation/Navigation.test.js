import { render, screen } from "@testing-library/react";
import Navigation from ".";
import Spotlight from "../Spotlight";

test("A navigation link labeled 'Spotlight' is displayed", () => {
  render(<Navigation />);
  const linkSpotlight = screen.getByRole("link", { name: "Spotlight" });
  expect(linkSpotlight).toBeInTheDocument();
});

test("A navigation link labeled 'Pieces' is displayed", () => {
  render(<Navigation />);
  const linkPieces = screen.getByRole("link", { name: 'Pieces' });
  expect(linkPieces).toBeInTheDocument();
});
