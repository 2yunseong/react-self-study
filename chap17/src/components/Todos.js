import TodoItem from "./TodoItem";

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type='submit'>등록</button>
      </form>

      <div>
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
