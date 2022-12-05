import { useRecoilValue } from 'recoil';
import { todoListState } from '../atom/todoListState';

import ToDoItem from './components/ToDoItem';

const ToDoItems = () => {
  const todos = useRecoilValue(todoListState);

  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} item={todo} />
      ))}
    </ul>
  );
};

export default ToDoItems;
