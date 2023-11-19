import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({
  image,
  artist,
  slug,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <div>
        <Image src={image} width={500} height={500} alt={artist} />
        <h2>{artist}</h2>
        <FavoriteButton
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        ></FavoriteButton>
      </div>
    </>
  );
}
