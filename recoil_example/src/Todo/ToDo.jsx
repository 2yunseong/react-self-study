import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState } from '../atom/todoListState';

import ToDoCreator from './components/ToDoCreator';
import ToDoItem from './components/ToDoItem';

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
