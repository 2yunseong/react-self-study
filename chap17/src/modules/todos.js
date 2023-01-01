// 액션 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
let id = 2;

// 액션 생성함수 정의
export const changeInput = (input) => {
  return { type: CHANGE_INPUT, inputs: input };
};

export const insert = () => {
  return { type: INSERT };
};

export const toggle = (id) => {
  return { type: TOGGLE, id: id };
};

export const remove = (id) => {
  return { type: REMOVE, id: id };
};

const initialState = {
  inputs: '',
  todos: [
    {
      id: 1,
      text: 'test1',
      done: false,
    },
  ],
};

// reducer 정의
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        inputs: action.inputs,
      };
    case INSERT:
      return {
        inputs: '',
        todos: [...state.todos, { id: id++, text: state.inputs, done: false }],
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.id === todo.id) {
            return {
              ...todo,
              done: !todo.done,
            };
          }
          return todo;
        }),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todos;
