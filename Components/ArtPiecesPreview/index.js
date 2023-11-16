import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <Image src={image} alt={title} width={312} height={312} />
      <div>{title}</div>
      <div>{artist}</div>
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      ></FavoriteButton>
    </>
  );
}
