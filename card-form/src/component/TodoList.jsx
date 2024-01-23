import { useState } from "react";
import "./style/TodoList.scss";

export function TodoList() {
    let isDone= false
  const [todo, setTodo] = useState("");
  const [newTodo, setNewTodo] = useState([]);
  function handleTodoInput(e) {
    const todoValue = e.target.value;
    setTodo(todoValue);
  }
  function handleAddTodo() {
    setNewTodo((t) => [...t, todo]);
    console.log(newTodo);
    setTodo("");
  }
  function handleRemoveTodo(index) {
    const newTodoRemove = [...newTodo];
    newTodoRemove.splice(index, 1);
    setNewTodo(newTodoRemove);
    console.log("object");
  }
  function handleIsDoneTodo() {
    isDone=true
  }
  return (
    <>
      <h1>To Do List</h1>
      <input type="text" name="todo" value={todo} onChange={handleTodoInput} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button
        onClick={() => {
          setNewTodo([]);
        }}
      >
        clean Todo
      </button>
      <ul>
        {newTodo.map((todo, index) => {
          return (
            <li key={index} className={isDone ? "listDone": "listFalse" }>
              {todo} <button onClick={handleRemoveTodo}>remove</button>
               <button onClick={handleIsDoneTodo}>Is Done!</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
