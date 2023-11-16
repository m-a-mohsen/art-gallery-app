export default function FavoriteButton({ artPiecesInfo, onToggleFavorite }) {
  console.log(onToggleFavorite);
  const { isFav } = artPiecesInfo.find(
    (info) => info.slug === artPiecesInfo.slug
  ) ?? {
    isFav: false,
  };
  return (
    <button type="button" onClick={() => onToggleFavorite(artPiecesInfo.slug)}>
      {isFav ? "Remove From Favorites" : "Add To Favorites"}
    </button>
  );
}
