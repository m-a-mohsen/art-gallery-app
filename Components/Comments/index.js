export default function Comments({ searchTerm }) {
  const results = topics.filter((topic) => topic.includes(searchTerm));

  return (
    <ul>
      {results.map((result) => (
        <li key={result}>{result}</li>
      ))}
    </ul>
  );
}
