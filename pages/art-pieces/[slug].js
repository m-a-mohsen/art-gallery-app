import useSWR from "swr";
import ArtPieceDetails from "@/Components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPiecesDetails() {
      const { data, error, isLoading, mutate } = useSWR(
        "https://example-apis.vercel.app/api/art"
      );

      if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    
    const router = useRouter();
    const clickedImageSlug = router.query.slug;
    // change hard coded slug later
    const { imageSource, name, artist, year, genre } = data.find(
      (item) => item.slug === clickedImageSlug
    );
    console.log(imageSource)

    return (
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
      />
    );
}
