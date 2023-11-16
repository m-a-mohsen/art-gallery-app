import Image from "next/image";
import ArtPiecesPreview from "../ArtPiecesPreview";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <ArtPiecesPreview
              title={piece.name}
              image={piece.imageSource}
              artist={piece.artist}
            />
          </Link>
        </li>
      ))}
    </>
  );
}
