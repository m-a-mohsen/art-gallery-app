import ArtPieces from "@/Components/ArtPieces";

export default function ArtPiecesPage({
  onToggleFaFavorite,
  artPiecesInfo,
  pieces,
}) {
  return (
    <main>
      <ArtPieces
        pieces={pieces}
        onToggleFavorite={onToggleFaFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </main>
  );
}
