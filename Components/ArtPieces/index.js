import Image from "next/image";
import ArtPiecesPreview from "../ArtPiecesPreview";
import Link from "next/link";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </>
  );
}
