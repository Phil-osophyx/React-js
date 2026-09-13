export default function Fruits() {
  const fruits = ["Apple", "Mango", "Orange", "Banana", "Guava"];
  return (
    <div>
        <ul>
      {fruits.map((frt) => (
        <li key='frt' >{frt}</li>
      ))}
      </ul>
    </div>
  );
}
