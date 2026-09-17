export default function Fruit({ name, price, emj, soldout}) {
  return (
    <>
      <li>
        {emj} {name} {price} {soldout ? "soldOut": ""}
      </li>
    </>
  );
}
