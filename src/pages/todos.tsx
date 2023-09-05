import React from "react";

import TodoList from "../components/todoList";
import TodoForm from "../components/todoForm";
import { useTodo } from "../context/todo";

export const Todos: React.FC = () => {
  const { todoState } = useTodo();
  return (
    <div className="todo-container">
      <h3>Create your daily tasks</h3>
      <TodoForm />
      <div className="todolist-container">
        {todoState.map((todo) => (
          <TodoList key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};
