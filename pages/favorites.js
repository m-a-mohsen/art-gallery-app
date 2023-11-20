import ArtPieces from "../Components/ArtPieces";


export default function Favorites({ pieces, artPiecesInfo, onToggleFavorite }) {

  if (artPiecesInfo.length == 0) {

    return <h1>there are no Favorites</h1>
  }
  console.log("pieces", pieces)
  let FavInfoSlugs = artPiecesInfo.filter((i) =>
    i.isFav
  ).map((i) => i.slug);
  console.log("favSlugs", FavInfoSlugs)
  console.log("first slug", pieces[0].slug);
  console.log("filter logic", FavInfoSlugs.includes(pieces[0].slug));
  let favPieces = pieces.filter((i) => { return FavInfoSlugs.includes(i.slug) })

  console.log("favPieces", favPieces)
  if (FavInfoSlugs.length == 0) {
    return <h1>there are no Favorites</h1>;
  }
  // console.log(FavPieces)
  return <ArtPieces pieces={favPieces} artPiecesInfo={artPiecesInfo} onToggleFavorite={onToggleFavorite} />;
}
