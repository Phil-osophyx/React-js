function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.msg} {person.name} {person.emj} {person.seatno}
      </h1>
    </div>
  );
}

export default Hello;
