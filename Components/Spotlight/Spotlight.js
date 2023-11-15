import Image from "next/image";
export default function Spotlight({ image, artist }) {
  return (
    <>
      <Image
        src={image}
        width={500}
        height={500}
        alt={artist}
      />
      <h2>{ artist }</h2>
    </>
  );
}
