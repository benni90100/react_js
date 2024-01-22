import { useState, useEffect } from "react";

export function TodoList() {
  const [todo, setTodo] = useState("");
  const [addtodo, setAddTodo] = useState([]);
  function handleInputChange(e) {
    const value = e.target.value;
    setTodo(value);
  }
  function handleAddTodo() {
    setAddTodo((t) => [...t, todo]);
    console.log(addtodo);
    setTodo("");
  }
  function handleRemoveTodo() {
    setAddTodo([]);
  }
  useEffect(() => {
    console.log(addtodo);
  }, [addtodo]);
  function handleRemoveItem(index) {
    const newTodos = [...addtodo];
    newTodos.splice(index, 1)
    setAddTodo(newTodos)
  }

  return (
    <>
      <input name="todo" value={todo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}> add </button>
      <button onClick={handleRemoveTodo}> add </button>
      <ul>
        {addtodo.map((todo, index) => {
          return (
            <>
              <li key={index}>
                {todo}
                <button  onClick={handleRemoveItem}>
                  remove
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
