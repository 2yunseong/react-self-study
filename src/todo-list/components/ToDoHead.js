import React from "react";
import styled from "styled-components";

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
  return (
    <TodoHeadBlock>
      <h1>2022년 2월 11일</h1>
      <div className="day">금요일</div>
      <div className="tasks-left">할일 2개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
