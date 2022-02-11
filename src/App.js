import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./todo-list/components/ToDoTemplate";
import TodoHead from "./todo-list/components/ToDoHead";
import TodoList from "./todo-list/components/ToDoList";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default App;
