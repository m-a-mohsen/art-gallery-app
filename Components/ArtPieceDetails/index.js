import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <Image src={image} alt={title} width={312} height={312} />
      <div>{title}</div>
      <div>{artist}</div>
      <div>{year}</div>
      <div>{genre}</div>
      <Link href="/art-pieces">Back to list</Link>
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
