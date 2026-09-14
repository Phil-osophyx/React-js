import Fruit from "./Fruit"

export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Orange", "Banana", "Guava"];

  const fruits = [
    { name: "Apple", price: "$10", emj: "🍎" },
    { name: "Mango", price: "$7", emj: "🥭" },
    { name: "Banana", price: "$3", emj: "🍌" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit name={fruit.name} price={fruit.price} emj={fruit.emj} />
        ))}
      </ul>
    </div>
  );
}
