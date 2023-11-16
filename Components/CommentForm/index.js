/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export default function CommentForm({ onAddComment, comments }) {
  const [comment, setComment] = useState();

  function handleSubmit(event) {
    event.preventDefault();

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
      ></textarea>

      <input
        onChange={(event) => {
          setComment(event.target.value);
        }}
        type="submit"
        value="Submit Comment"
      ></input>
    </form>
  );
}
