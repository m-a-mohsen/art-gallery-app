import Image from "next/image";

export default function ArtPiecesPreview({ image, title, artist }) {
  return (
    <>
      <Image src={image} alt={title} width={312} height={312} />
      <div>{title}</div>
      <div>{artist}</div>
    </>
  );
}
