import React from 'react';
import ToDoCreator from './components/ToDoCreator';
import ToDoItems from './ToDoItems';

const ToDo = () => {
  return (
    <div className='todo-container'>
      <ToDoCreator />
      <ToDoItems />
    </div>
  );
};

export default ToDo;
