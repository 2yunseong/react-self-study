import { useCallback, useRef } from 'react';
import { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'test1',
      checked: true,
    },
    {
      id: 2,
      text: 'test2',
      checked: true,
    },
    {
      id: 3,
      text: 'test3',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos([...todos, todo]);
      nextId.current += 1;
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
