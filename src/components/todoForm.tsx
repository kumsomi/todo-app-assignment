import React, { FormEvent, useState } from "react";
import { TodoPriority } from "../types/todoTypes";
import { v4 as uuidv4 } from "uuid";
import { useTodo } from "../context/todo";

export const TodoForm: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [selectedPriority, setSelectedPriority] = useState<TodoPriority>(
    TodoPriority.Low
  );
  const { todoDispatch } = useTodo();

  const addTodos = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: input,
      isComplete: false,
      priority: selectedPriority
    };
    todoDispatch({ type: "ADD_TODO", payload: newTodo });
    setInput("");
  };
  return (
    <form onSubmit={addTodos} className="form-todo">
      <input
        type="text"
        placeholder="Add todos..."
        className="input-todo"
        name="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <select
        name="priority"
        id="priority"
        value={selectedPriority}
        onChange={(e) => setSelectedPriority(e.target.value as TodoPriority)}
        className="select"
      >
        {Object.values(TodoPriority).map((priority) => (
          <option
            className="option"
            id="option"
            key={priority}
            value={priority}
          >
            {priority.charAt(0).toUpperCase() + priority.slice(1)}
          </option>
        ))}
      </select>

      <input type="submit" className="submit-btn" value="Add" />
    </form>
  );
};

export default TodoForm;
