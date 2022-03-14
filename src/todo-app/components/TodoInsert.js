import React from "react";
import "../TodoInsert.css";
import { MdAddTask } from "react-icons/md";

const TodoInsert = () => {
  return (
    <form className='TodoInsert'>
      <input className='TodoInsert-input' placeholder='할 일 입력' />
      <button className='TodoInsert-submit-button' type='submit'>
        <MdAddTask />
      </button>
    </form>
  );
};
export default TodoInsert;
