import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import useLocalStorageState from "use-local-storage-state";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  artPiecesInfo,
  onToggleFavorite,
  colors,
}) {
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });

  function handleAddComment(newComment) {
    setComments([...comments, newComment]);
  }

  return (
    <>
      <Link href="/art-pieces">← Back to List</Link>
      <div>
        <Image src={image} alt={title} width={312} height={312} />
        <div>{title}</div>
        <div>{artist}</div>
        <div>{year}</div>
        <div>{genre}</div>
        {colors.map((color) => {
          // eslint-disable-next-line react/jsx-key
          return <div style={{ backgroundColor: color }}>{color}</div>;
        })}

        <FavoriteButton
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        />
      </div>
      <div>
        <CommentForm onAddComment={handleAddComment} />
        <Comments comments={comments} />
      </div>
    </>
  );
}
