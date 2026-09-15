

export default function Conditional() {
  let msg;
  const display = true;

  if (display) {
    msg = <h1>This is message 1</h1>;
  } else {
    msg = <h1>This is message 2</h1>;
  }
  return msg;
}
