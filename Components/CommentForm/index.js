/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export default function CommentForm({ onAddComment }) {
  const [comment, setComment] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();

    onAddComment(comment);
  }

  return (
    <form onSubmit={handleSubmit} method="post">
      <label htmlFor="comment">Write your comment:</label>
      <textarea
        id="comment"
        name="comment"
        rows="4"
        cols="50"
        required
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></textarea>

      <input type="submit" value="Submit Comment" />
    </form>
  );
}