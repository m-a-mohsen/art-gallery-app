import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import { useState } from "react";

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
  const [comments, setComments] = useState([]);

  function handleAddComment(newComment) {
    setComments([...comments, newComment]);
  }
  return (
    <>
      <Image src={image} alt={title} width={312} height={312} />
      <div>{title}</div>
      <div>{artist}</div>
      <div>{year}</div>
      <div>{genre}</div>
      {colors.map((color) => {
        // eslint-disable-next-line react/jsx-key
        return <div style={{ backgroundColor: color }}>{color}</div>;
      })}
      <Link href="/art-pieces">Back to list</Link>
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <CommentForm onAddComment={handleAddComment} />
      <Comments comments={comments} />
    </>
  );
}
