import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Spotlight from ".";

test("renders an image", () => {
  render(<Spotlight slug={[]} artPiecesInfo={[]} onToggleFavorite={[]} />);

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("renders the name of the artist", () => {
  render(
    <Spotlight
      artist="artist"
      slug={[]}
      artPiecesInfo={[]}
      onToggleFavorite={[]}
    />
  );

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
