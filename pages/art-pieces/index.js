import ArtPieces from "../../Components/ArtPieces";

export default function ArtPiecesPage({
  onToggleFavorite,
  artPiecesInfo,
  pieces,
}) {
  return (
    <main>
      <ArtPieces
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </main>
  );
}
