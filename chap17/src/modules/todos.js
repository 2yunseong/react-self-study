import produce from 'immer';
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
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.inputs = input;
      }),
    [INSERT]: (state, action) =>
      produce(state, (draft) => {
        draft.todos.push({ id: id++, text: draft.inputs, done: false });
        draft.inputs = '';
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);

export default todos;
