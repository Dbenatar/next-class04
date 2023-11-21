import Link from "next/link";

type furrSearchQuery = {
  sortBy: string;
};

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

function compareFurr(a: furrType, b: furrType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: furrSearchQuery;
}) {
  if (searchParams.sortBy == "asc") {
    furr.sort(compareFurr);
  } else if (searchParams.sortBy == "desc") {
    furr.sort(compareFurr).reverse();
  }

  return (
    <div>
      <h2>Is this your furrsona?</h2>
      <p>{searchParams.sortBy}</p>
      <br />
      <Link href="/animals">Remove Sort</Link>
      <br />
      <Link href="/animals?sortBy=asc">Condescending Order</Link>
      <br />
      <Link href="/animals?sortBy=desc">Descending Order</Link>
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
