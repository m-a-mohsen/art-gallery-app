import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <Image src={image} alt={title} width={312} height={312} />
      <div>{title}</div>
      <div>{artist}</div>
      <div>{year}</div>
      <div>{genre}</div>
    </>
  );
}
