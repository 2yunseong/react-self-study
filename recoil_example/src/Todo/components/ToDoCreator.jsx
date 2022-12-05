import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../atom/todoListState';

let id = 0;
const getId = () => {
  return ++id;
};

const ToDoCreator = () => {
  const setTodoList = useSetRecoilState(todoListState);
  const [text, setText] = useState('');

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: text,
        isComplete: false,
      },
    ]);
    setText(() => '');
  };

  const onChange = ({ target: { value } }) => {
    setText(value);
  };

  return (
    <div>
      <input value={text} type='text' onChange={onChange} />
      <button onClick={addItem}>추가</button>
    </div>
  );
};

export default ToDoCreator;
