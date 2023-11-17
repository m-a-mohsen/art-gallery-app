import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Spotlight from ".";

test("renders a random image", () => {
  render(<Spotlight artPiecesInfo={[]} onToggleFavorite={[]} slug={[]} />);

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});
