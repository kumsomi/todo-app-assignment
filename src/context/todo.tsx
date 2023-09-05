import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch
} from "react";
import { todoReducer } from "../reducer/todo";
import { ITodo, TodoAction } from "../types/todoTypes";

const initialTodoList: ITodo[] = [];
// {
//     id: "",
//     title: "",
//     isComplete: false,
//     priority: TodoPriority.Low
//   }

interface TodoContextType {
  todoState: ITodo[];
  todoDispatch: Dispatch<TodoAction>;
}

const TodoContext = createContext<TodoContextType>({
  todoState: initialTodoList,
  todoDispatch: () => {}
});

const { Provider } = TodoContext;

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialTodoList);

  return <Provider value={{ todoState, todoDispatch }}>{children}</Provider>;
};
const useTodo = () => useContext(TodoContext);
export { TodoProvider, useTodo };
