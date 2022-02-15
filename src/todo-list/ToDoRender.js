import React from "react";
import { createGlobalStyle } from "styled-components";
import ToDoCreate from "./components/ToDoCreate";
import TodoHead from "./components/ToDoHead";
import TodoList from "./components/ToDoList";
import TodoTemplate from "./components/ToDoTemplate";
import { TodoProvider } from "./ToDoContext";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

const ToDoRender = () => {
  return (
    <div>
      <GlobalStyle />
      <TodoProvider>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <ToDoCreate />
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
};

export default ToDoRender;
