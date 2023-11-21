/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";

export default function CommentForm({ onAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddComment(data);
    event.target.reset();
    event.target.elements.comment.focus();
  }

  return (
    <form onSubmit={handleSubmit} method="post">
      <label htmlFor="comment">Write a Comment:</label>
      <textarea
        id="comment"
        name="comment"
        rows="4"
        cols="50"
        style={{ fontFamily: "system-ui", fontSize: "14px" }}
        required
      ></textarea>
      <input type="submit" value="Submit Comment" />
    </form>
  );
}
