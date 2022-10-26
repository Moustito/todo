export default function List({ todos, HandleDelete, handleCheck }) {
  //Render
  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <p key={todo.id}>
            <input
              type="checkbox"
              onClick={(e) => handleCheck(todo.id, e)}
              style={{ marginRight: "10px" }}
            />
            {todo.check ? (
              <span style={{ textDecoration: "line-through", color: "#333" }}>
                {todo.nom}
              </span>
            ) : (
              <span>{todo.nom}</span>
            )}
            <button
              onClick={() => HandleDelete(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              X
            </button>
          </p>
        ))}
      </ul>
    </div>
  );
}
