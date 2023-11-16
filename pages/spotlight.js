import Spotlight from "@/Components/Spotlight";
import pickRandomItem from "@/utils/random";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  console.log(pieces);
  const randomArt = pickRandomItem(pieces);

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
