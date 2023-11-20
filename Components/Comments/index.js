export default function Comments({ comments }) {
  console.log(comments);
  return (
    <div>
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>There are no comments.</p>
      ) : (
        <div>
          {comments.map((comment, index) => (
            <li key={index}>
              <p>
                <u>Posted on {new Date().toLocaleDateString()}</u>
              </p>
              <em>{comment}</em>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
