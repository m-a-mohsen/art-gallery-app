/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import ArtPieceDetails from "@/Components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPiecesDetailsPage({
  onToggleFavorite,
  artPiecesInfo,
}) {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const router = useRouter();
  const clickedImageSlug = router.query.slug;
  const { imageSource, name, artist, year, genre } = data.find(
    (item) => item.slug === clickedImageSlug
  );
  console.log(imageSource);

  return (
    <ArtPieceDetails
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
      image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
