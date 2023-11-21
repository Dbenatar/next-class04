type furrParam = { params: { furry: string } };

export default function Page({ params }: furrParam) {
  return (
    <div>
      <h2>Dynamic route! : {params.furry}</h2>
    </div>
  );
}

// export default function HeaderComponent({ cats }) {
//   return cats;
// }

// FunkyNextObject = {
//   params: {
//     furry: "Type in the URL",
//   },
// };
