import { render, screen } from "@testing-library/react";
import ArtPiecesPreview from ".";

test("Each art piece's image is displayed", () => {
  render(<ArtPiecesPreview image={""} artPiecesInfo={[]} />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("Each art piece's title is displayed", () => {
  render(<ArtPiecesPreview title={'title'} artPiecesInfo={[]} />);
  const title = screen.getByText(/title/i);
  expect(title).toBeInTheDocument();
});

test("Each art piece's artist is displayed", () => {
  render(<ArtPiecesPreview title={"artist"} artPiecesInfo={[]} />);
  const artist = screen.getByText(/artist/i);
  expect(artist).toBeInTheDocument();
});

