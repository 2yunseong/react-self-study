import { createAction, handleActions } from 'redux-actions';

// 액션 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
let id = 2;

// 액션 생성함수 정의

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

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

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({
      ...state,
      inputs: input,
    }),
    [INSERT]: ({ todos, inputs }, action) => ({
      inputs: '',
      todos: [...todos, { id: id++, text: inputs, done: false }],
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      }),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);

export default todos;
