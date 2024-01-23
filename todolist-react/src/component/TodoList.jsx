import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function TodoList() {
  const [todo, setTodo] = useState("");
  const [addtodo, setAddTodo] = useState([]);

  function handleInputChange(e) {
    const value = e.target.value;
    setTodo(value);
  }

  function handleAddTodo() {
    setAddTodo((todos) => [...todos, { id: Date.now(), text: todo }]);
    setTodo("");
  }

  function handleRemoveTodo() {
    setAddTodo([]);
  }

  function handleRemoveItem(id) {
    const newTodos = addtodo.filter((todo) => todo.id !== id);
    setAddTodo(newTodos);
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = Array.from(addtodo);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setAddTodo(items);
  }

  useEffect(() => {
    console.log(addtodo);
  }, [addtodo]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <input name="todo" value={todo} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add</button>
        <button onClick={handleRemoveTodo}>Remove All</button>
      </div>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {addtodo.map((todo, index) => (
              <Draggable
                key={todo.id}
                draggableId={todo.id.toString()}
                index={index}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {todo.text}
                    <button onClick={() => handleRemoveItem(todo.id)}>
                      Remove
                    </button>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
