import Link from "next/link";

export default function User() {
  return (
    <ul>
      <li>
        <Link href={"users/an"}>An</Link>
      </li>
      <li>
        <Link href={"users/bao"}>Bao</Link>
      </li>
      <li>
        <Link href={"users/chung"}>Chung</Link>
      </li>
      <li>
        <Link href={"users/phat"}>Phat</Link>
      </li>
    </ul>
  );
}
