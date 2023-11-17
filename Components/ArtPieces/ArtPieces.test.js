import { render, screen } from "@testing-library/react";
import ArtPieces from ".";
const pieces = 
  [{
    "slug": "orange-red-and-green",
    "artist": "Steve Johnson",
    "name": "Orange Red and Green Abstract Painting",
    "imageSource": "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    "year": "2018",
    "genre": "Abstract Painting",
    "colors": [
      "#0f5855",
      "#e6ba15",
      "#b42011",
      "#cec4c6",
      "#d5561f"
    ],
    "dimensions": {
      "height": 2432,
      "width": 1920,
      "type": "jpg"
    }
  }]

test("All art pieces are displayed as a list", () => {
    render(<ArtPieces pieces={pieces} />);
  const listItem = screen.getByRole("listitem");
  expect(listItem).toBeInTheDocument();
});
