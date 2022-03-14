import React from "react";
import {
  MdRemoveCircleOutline,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";
import "../TodoListItem.css";

const TodoListItem = () => {
  return (
    <div className='TodoListItem'>
      <div className='TodoListItem-checkbox'>
        <MdOutlineCheckBoxOutlineBlank />
        <div className='TodoListItem-content'>Task</div>
      </div>
      <div className='TodoListItem-remove-button'>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
