export default function CommentForm() {
  return (
    <form method="post">
      <label htmlFor="comment">Write your comment:</label>
      <textarea
        id="comment"
        name="comment"
        rows="4"
        cols="50"
        required
      ></textarea>

      <input type="submit" value="Submit Comment"></input>
    </form>
  );
}
