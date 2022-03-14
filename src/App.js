import React from "react";
import TodoTemplate from "./todo-app/components/TodoTemplate";
import TodoInsert from "./todo-app/components/TodoInsert";
import TodoList from "./todo-app/components/TodoList";
import "./App.css";

const App = () => {
  return (
    <TodoTemplate>
      <TodoList />
      <TodoInsert />
    </TodoTemplate>
  );
};
export default App;
