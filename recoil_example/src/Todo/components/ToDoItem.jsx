import React from 'react';
import { useRecoilState } from 'recoil';

import { todoListState } from '../../atom/todoListState';

const ToDoItem = ({ item }) => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const currentIdx = todos.findIndex((todo) => todo === item);

  const deleteItem = () => {
    setTodos(() => todos.filter((todo) => todo.id !== item.id));
  };

  const onChange = ({ target: { value } }) => {
    setTodos(() =>
      replaceItem(todos, currentIdx, {
        ...item,
        text: value,
      })
    );
  };

  const replaceItem = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  const checkComplete = () => {
    setTodos(() =>
      replaceItem(todos, currentIdx, {
        ...item,
        isComplete: !item.isComplete,
      })
    );
  };

  return (
    <li>
      <input
        type='checkbox'
        checked={item.isComplete}
        onChange={checkComplete}
      />
      <input type='text' onChange={onChange} value={item.text} />
      <button onClick={deleteItem}>삭제</button>
    </li>
  );
};

export default ToDoItem;
