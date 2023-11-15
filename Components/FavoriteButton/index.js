export default function FavoriteButton({ artPiecesInfo, onToggleFavorite }) {
  return (
    <button type="button" onClick={() => onToggleFavorite(artPiecesInfo.slug)}>
      {artPiecesInfo.isFav ? "Add to Favorites" : "Remove from Favorites"}
    </button>
  );
}
