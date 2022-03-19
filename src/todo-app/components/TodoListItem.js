import React from "react";
import {
  MdRemoveCircleOutline,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdCheckBox,
} from "react-icons/md";
import "../TodoListItem.css";

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className='TodoListItem'>
      <div className='TodoListItem-checkbox'>
        {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        <div className='TodoListItem-content'>{text}</div>
      </div>
      <div className='TodoListItem-remove-button'>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
