import Image from "next/image";
import ArtPiecesPreview from "../ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
          />
        </li>
      ))}
    </>
  );
}
