import React, { createContext, useReducer, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "알고리즘 문제풀이 ",
    done: true,
  },
  {
    id: 2,
    text: "React 스터디",
    done: true,
  },
  {
    id: 3,
    text: "자바스크립트 공부",
    done: false,
  },
  {
    id: 4,
    text: "유튜브",
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ToDoStateContext = createContext();
const ToDoDispatchContext = createContext();
const ToDoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <ToDoStateContext.Provider value={state}>
      <ToDoDispatchContext.Provider value={dispatch}>
        <ToDoNextIdContext.Provider value={nextId}>
          {children}
        </ToDoNextIdContext.Provider>
      </ToDoDispatchContext.Provider>
    </ToDoStateContext.Provider>
  );
}

export function useToDoState() {
  const context = useContext(ToDoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useToDoDispatch() {
  const context = useContext(ToDoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useToDoNextId() {
  const context = useContext(ToDoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
