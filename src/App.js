import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./todo-list/ToDoTemplate";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoTemplate>안녕하쉽니까</TodoTemplate>
    </div>
  );
}

export default App;
