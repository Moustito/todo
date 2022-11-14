import { useState } from "react";

export default function Form({ handleAdd }) {
  //State
  const [newTodo, setNewTodo] = useState("");
  const [newDate, setNewDate] = useState("");

  //Comportements
  function handleChange(event) {
    setNewTodo(event.target.value);
  }
  function handledate(event) {
    setNewDate(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (newTodo != "") {
      const id = new Date().getTime();
      const nom = newTodo;
      const check = false;
      const deadline = newDate;
      const TodoAAjouter = { id, nom, check, deadline };
      handleAdd(TodoAAjouter);
      setNewTodo("");
      setNewDate("");
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
      <input
        value={newDate}
        type="date"
        placeholder="Deadline"
        onChange={handledate}
      />
      <button className="Form__button">Add Todo</button>
    </form>
  );
}
