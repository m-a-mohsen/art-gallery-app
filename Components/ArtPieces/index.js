import Image from "next/image";

export default function ArtPieces({ data }) {
  return (
    <>
      {data.map(({ name, artist, imageSource, slug }) => (
        <li key={slug}>
          <div key={name}>{name}</div>
          <div>{artist}</div>
          <Image src={imageSource} alt={name} width={312} height={312} />
        </li>
      ))}
    </>
  );
}
