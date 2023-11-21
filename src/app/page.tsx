import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/animals">Got to my Furrsona page</Link>
    </div>
  );
}
