import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./todo-list/components/ToDoTemplate";
import TodoHead from "./todo-list/components/ToDoHead";
import TodoList from "./todo-list/components/ToDoList";
import ToDoCreate from "./todo-list/components/ToDoCreate";
import { TodoProvider } from "./todo-list/ToDoContext";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <ToDoCreate />
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
}

export default App;
