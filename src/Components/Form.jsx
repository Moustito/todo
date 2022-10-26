import { useState } from "react";

export default function Form({ handleAdd }) {
  //State
  const [newTodo, setNewTodo] = useState("");

  //Comportements
  function handleChange(event) {
    setNewTodo(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (newTodo != "") {
      const id = new Date().getTime();
      const nom = newTodo;
      const check = false;
      const TodoAAjouter = { id, nom, check };
      handleAdd(TodoAAjouter);
      setNewTodo("");
    }
  }

  //Render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={newTodo}
        type="text"
        placeholder="Type a new todo"
        onChange={handleChange}
      />
      <button className="Form__button">Add Todo</button>
    </form>
  );
}
