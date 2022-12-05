import React from 'react';
import { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState } from '../atom/todoState';

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

const ToDo = () => {
  const todos = useRecoilValue(todoListState);

  return (
    <div className='todo-container'>
      <ToDoCreator />
      <ul>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} item={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
