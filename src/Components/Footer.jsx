import { useState } from "react";

export default function Footer({ todos, setDisplayTodos }) {
  //State
  const [display, setDisplay] = useState();

  //Comportements
  function displayAllTask() {
    console.log("All");
  }
  function displayTask(e) {
    setDisplayTodos(e.target.value);
    // const todosCopy = [...todos];
    // const todoActive = todosCopy.filter((todos) => todos.check == false);
    // console.log(todoActive);
    // setTodos(todoActive);
  }

  //Render
  return (
    <div style={{ display: "flex" }}>
      <p>{todos.length} task left.</p>
      {/* <button value={""} onClick={(e) => displayTask(e)}>
        All
      </button>
      <button value={false} onClick={(e) => displayTask(e)}>
        Active
      </button>
      <button value={true} onClick={(e) => displayTask(e)}>
        Completed
      </button> */}
    </div>
  );
}
