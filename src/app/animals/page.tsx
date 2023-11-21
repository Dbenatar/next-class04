import Link from "next/link";

type furrType = {
  name: string;
  id: number;
};

let furr: furrType[] = [
  {
    name: "Dog",
    id: 0,
  },
  {
    name: "Cat",
    id: 1,
  },
  {
    name: "Wolf",
    id: 2,
  },
  {
    name: "Bear",
    id: 3,
  },
];

export default function Page() {
  return (
    <div>
      <h2>Is this your furrsona?</h2>
      {furr.map((furr) => {
        return (
          <div key={furr.id}>
            <Link href={`/animals/${furr.name.toLowerCase()}`}>
              {furr.name}
            </Link>
          </div>
        );
      })}
      <Link href="./">Go home</Link>
    </div>
  );
}
