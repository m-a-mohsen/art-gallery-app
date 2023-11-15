import useSWR from "swr";
import ArtPieces from "@/Components/ArtPieces";

export default function HomePage() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <main>
      <ArtPieces pieces={data} />
    </main>
  );
}
