import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  function handleSubmit(e){
    e.preventDefault();
  }
  return (
    <div>
      {name.firstname}- {name.lastname}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          type="text"
          value={name.firstname}
        />

        <input
          type="text"
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
          value={name.lastname}
        />

        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
