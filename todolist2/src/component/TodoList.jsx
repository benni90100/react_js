import { useState } from "react";

export function TodoList() {
    const [todo, setTodo] = useState("")
    const [todoArray, setTodoArray]= useState([])
    function handleTodoList(e) {
        const value = e.target.value
        setTodo(value)
    }
    function handleAddTodoList() {
        setTodoArray((d)=>[...d, todo])
        setTodo("")
    }
    function handleResetTodoList() {
        setTodoArray([])
    }
    return (
      <>
        <label htmlFor="todoList"></label>
        <input name="todoList" value={todo} onChange={handleTodoList} />
        <button onClick={handleAddTodoList}>add Todo</button>
        <button onClick={handleResetTodoList}>remove Todo</button>
        <ul>
          {todoArray.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </>
    );
}