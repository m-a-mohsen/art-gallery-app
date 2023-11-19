export default function FavoriteButton({
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  const { isFav } = artPiecesInfo.find((info) => info.slug === slug) ?? {
    isFav: false,
  };

  return (
    <button type="button" onClick={() => onToggleFavorite(slug)}>
      {isFav ? "Remove From Favorites" : "Add To Favorites"}
    </button>
  );
}
