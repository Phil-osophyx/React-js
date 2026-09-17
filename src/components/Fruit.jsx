export default function Fruit({ name, price, emj }) {
  return (
      < >
      {/* {emj} {name} {price}{" "} */}
      {price > 5 ? (
          <li>
          {emj} {name} {price}
        </li>
      ) : (
        ""
      )}
  </>
  );
}
