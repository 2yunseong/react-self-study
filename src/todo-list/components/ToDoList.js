import React from "react";
import styled from "styled-components";
import ToDoItem from "../components/ToDoItem";
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <ToDoItem text="프로젝트 생성하기" done={true} />
      <ToDoItem text="컴포넌트 스타일링 하기" done={true} />
      <ToDoItem text="Context 만들기" done={false} />
      <ToDoItem text="기능 구현하기" done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
