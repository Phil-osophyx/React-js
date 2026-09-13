function Hello(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.msg} {props.name}</h1>
    </div>
  );
}

export default Hello;
