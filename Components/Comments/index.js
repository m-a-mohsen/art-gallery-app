export default function Comments({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <li key={index}>
          <p>
            <u>Posted on {new Date().toLocaleDateString()}</u>
          </p>
          <em>{comment}</em>
        </li>
      ))}
    </div>
  );
}
