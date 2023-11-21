export default function Comments({ comments, slug }) {
  console.log(comments);

  const filteredComments = comments.filter(
    (commentObj) => commentObj.slug === slug
  );

  return (
    <div>
      <h2>Comments</h2>
      {filteredComments.length === 0 ? (
        <p>There are no comments.</p>
      ) : (
        <div>
          {filteredComments.map((commentObj, index) => (
            <li key={index}>
              <p>
                <u>Posted on {new Date().toLocaleDateString()}</u>
              </p>
              <em>{commentObj.comment}</em>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
