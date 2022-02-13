import React from "react";
import styled from "styled-components";
import ToDoItem from "../components/ToDoItem";
import { useToDoState } from "../ToDoContext";
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useToDoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => {
        return (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        );
      })}
    </TodoListBlock>
  );
};

export default TodoList;
