import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  slug,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={312} height={312} />
      </Link>
      <div>{title}</div>
      <div>{artist}</div>

      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      ></FavoriteButton>
    </>
  );
}
