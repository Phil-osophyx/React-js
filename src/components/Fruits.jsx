export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Orange", "Banana", "Guava"];

  const fruits = [
    { name: "Apple", price: 10, emj: "🍎" },
    { name: "Mango", price: 7, emj: "🥭" },
    { name: "Banana", price: 3, emj: "🍌" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((frt) => (
          <li key={frt.name}>
            {" "}
            {frt.emj} {frt.name} {frt.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
