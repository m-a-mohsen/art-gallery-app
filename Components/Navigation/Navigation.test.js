import { render, screen } from "@testing-library/react";
import Navigation from ".";
// import userEvent from "@testing-library/user-event";

test("A navigation link labeled 'Spotlight' is displayed", () => {
  render(<Navigation />);
  const linkSpotlight = screen.getByRole("link", { name: /Spotlight/i });
  expect(linkSpotlight).toBeInTheDocument();
});

test("A navigation link labeled 'Pieces' is displayed", () => {
  render(<Navigation />);
  const linkPieces = screen.getByRole("link", { name: /Pieces/i });
  expect(linkPieces).toBeInTheDocument();
});

// test("Clicking Spotlight shows the SpotlightPage", async () => {
//     render(<Navigation />);
    
//     const linkSpotlight = screen.getByRole("link", { name: /Spotlight/i });
//     await user.click(linkSpotlight);
//   expect(linkSpotlight).toBeInTheDocument();
// });
