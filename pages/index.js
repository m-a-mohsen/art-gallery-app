import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <main>
      <ArtPieces
        image={data.imageSource}
        title={data.name}
        artist={data.artist}
      />
    </main>
  );
}
