export default function Comments({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <li key={index}>{comment}</li>
      ))}
    </div>
  );
}
