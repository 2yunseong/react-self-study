import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = () => {
  return (
    <div className="todo-list">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
