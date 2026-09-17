import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Orange", "Banana", "Guava"];

  const fruits = [
    { name: "Apple", price: 10, emj: "🍎", soldout: false },
    { name: "Mango", price: 7, emj: "🥭", soldout: true },
    { name: "Banana", price: 3, emj: "🍌", soldout: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit name={fruit.name} price={fruit.price} emj={fruit.emj} soldout={fruit.soldout} />
        ))}
      </ul>
    </div>
  );
}
