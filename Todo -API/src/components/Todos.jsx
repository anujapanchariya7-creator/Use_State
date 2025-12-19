import { useState } from "react";
import { TodoContext } from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <h1>Todo Application (Context API)</h1>
      <AddTodo />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default Todos;
