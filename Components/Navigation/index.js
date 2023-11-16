import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/art-pieces">Pieces</Link>
      </li>
      <li>
        <Link href="/spotlight">spotlight</Link>
      </li>
      <li>
        <Link href="/favorites">favorites</Link>
      </li>
    </ul>
  );
}
