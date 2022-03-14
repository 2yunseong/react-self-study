import React from "react";
import "../TodoTemplate.css";

const TodoTemplate = ({ children }) => {
  return (
    <div className='TodoTemplate'>
      <div className='TodoTemplate-title'>일정관리 어플리케이션</div>
      <div className='TodoTemplate-content'>{children}</div>
    </div>
  );
};

export default TodoTemplate;
