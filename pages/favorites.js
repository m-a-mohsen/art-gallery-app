import ArtPieces from "@/Components/ArtPieces";
import useSWR from "swr";

export default function Favorites({ pieces, artPiecesInfo, onToggleFavorite }) {
  // const fetcher = (url) => fetch(url).then((response) => response.json());
  //   const { data, error, isLoading, mutate } = useSWR(
  //     "https://example-apis.vercel.app/api/art",
  //     fetcher
  //   );
  if (artPiecesInfo.length == 0) {
    return <h1>There are no favorites</h1>;
  }
  console.log("pieces", pieces);
  let FavInfoSlugs = artPiecesInfo.filter((i) => i.isFav).map((i) => i.slug);
  console.log("favSlugs", FavInfoSlugs);
  console.log("first slug", pieces[0].slug);
  console.log("filter logic", FavInfoSlugs.includes(pieces[0].slug));
  let favPieces = pieces.filter((i) => {
    return FavInfoSlugs.includes(i.slug);
  });

  console.log("favPieces", favPieces);
  if (FavInfoSlugs.length == 0) {
    return <h1>There are no Favorites</h1>;
  }
  // console.log(FavPieces)
  return (
    <ArtPieces
      pieces={favPieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
