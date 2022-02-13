import React from "react";
import styled from "styled-components";
import { useToDoState } from "../ToDoContext";

const TodoHeadBlock = styled.div`
  padding-top: 40px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 6px;
    color: #868e96;
    font-size: 16px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  const todos = useToDoState();
  const undoneTasks = todos.filter((todo) => !todo.done);
  let today = new Date();
  const dateOption = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const weekDayOption = {
    weekday: "long",
  };

  const dateString = today.toLocaleDateString("ko-KR", dateOption);
  const weekDayString = today.toLocaleDateString("ko-KR", weekDayOption);

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{weekDayString}</div>
      <div className="tasks-left">할일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
