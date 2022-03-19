import React, { useState } from "react";
import TodoTemplate from "./todo-app/components/TodoTemplate";
import TodoInsert from "./todo-app/components/TodoInsert";
import TodoList from "./todo-app/components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "교학상장 멘토링 OT",
      checked: false,
    },
    {
      id: 2,
      text: "운영체제 복습",
      checked: true,
    },
    {
      id: 3,
      text: "일정관리 앱 만들기",
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};
export default App;
