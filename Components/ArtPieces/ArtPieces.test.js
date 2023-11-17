import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

test("All art pieces are displayed as a list", () => {
    render(
      <ArtPieces
        pieces={[]}
      />
    );
  const listItems = screen.getAllByRole("generic");
  listItems.forEach((item)=>expect(item).toBeInTheDocument());
});
