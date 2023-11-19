import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/spotlight">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces">Pieces</Link>
      </li>
      <li>
        <Link href="/favorites">Favorites</Link>
      </li>
    </ul>
  );
}
