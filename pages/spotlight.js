import Spotlight from "../Components/Spotlight";
import pickRandomItem from "../utils/random";
import { useState, useEffect } from "react";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [randomArt, setRandomArt] = useState({});

  useEffect(() => {
    setRandomArt(pickRandomItem(pieces));
  }, [pieces]);

  return (
    <main>
      <Spotlight
        image={randomArt.imageSource}
        artist={randomArt.artist}
        slug={randomArt.slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}
