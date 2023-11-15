import Spotlight from "@/Components/Spotlight";

export default function SpotlightPage({ pieces }) {
  return (
    <main>
      <Spotlight image={pieces.imageSource} artist={pieces.artist} />
    </main>
  );
}
