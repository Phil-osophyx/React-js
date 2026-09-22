import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incby, setincby] = useState(1);
  function handleClick() {
    setCount(count + incby);
  }
  function decrement() {
    setCount(count - incby);
  }

  function incIncrement() {
    setincby(incby + 1);
  }

  function decIncrement() {
    setincby(incby - 1);
  }

  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>We are incrementing the value by:{incby}</h1>
      <button onClick={incIncrement}>Increase increment</button>
      <button onClick={decIncrement}>Decrease increment</button>
    </div>
  );
}
