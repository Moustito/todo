import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  //State
  const savedtodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState(
    savedtodos
      ? JSON.parse(savedtodos)
      : [
          { id: 1, nom: "Learn React", check: false },
          { id: 2, nom: "Understood React", check: false },
        ]
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const [displayTodos, setDisplayTodos] = useState("");

  //Comportements
  function HandleDelete(id) {
    const todosCopy = [...todos];
    const todoFiltre = todosCopy.filter((todoList) => id !== todoList.id);
    setTodos(todoFiltre);
  }
  function handleAdd(TodoAAjouter) {
    const todosCopy = [...todos];
    todosCopy.push(TodoAAjouter);
    setTodos(todosCopy);
  }
  function handleCheck(id, event) {
    // console.log(event.target.checked);

    const todosCopy = [...todos];
    const todoFiltre = todosCopy.filter((todoList) => id == todoList.id);
    todoFiltre[0].check = event.target.checked;
    // todoFiltre.push(event.target.checked);
    setTodos(todosCopy);
  }

  //Render
  return (
    <div className="App">
      <h1>Todo List</h1>
      {todos.length > 0 ? (
        <List
          todos={todos}
          displayTodos={displayTodos}
          HandleDelete={HandleDelete}
          handleCheck={handleCheck}
        />
      ) : (
        <p style={{ color: "#4A4A4A" }}>Good Job, you have no task !</p>
      )}
      <Form handleAdd={handleAdd} />
      <Footer todos={todos} setDisplayTodos={setDisplayTodos} />
    </div>
  );
}

export default App;
