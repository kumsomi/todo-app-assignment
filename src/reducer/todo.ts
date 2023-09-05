import { ITodo, TodoAction } from "../types/todoTypes";

export const todoReducer = (prevTodoState: ITodo[], action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...prevTodoState, action.payload];
    case "REMOVE_TODO":
      return prevTodoState.filter((todos) => todos.id !== action.payload.id);
    case "UPDATE_TODO":
      return prevTodoState.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isComplete: action.payload.isComplete }
          : todo
      );

    default:
      return { ...prevTodoState };
  }
};
