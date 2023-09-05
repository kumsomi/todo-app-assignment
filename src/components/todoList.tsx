import React, { useEffect } from "react";
import {
  FcMediumPriority,
  FcLowPriority,
  FcHighPriority
} from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { TodoPriority } from "../types/todoTypes";
import { useTodo } from "../context/todo";
import { ITodo } from "../types/todoTypes";

export const TodoList: React.FC<ITodo> = ({
  id,
  title,
  isComplete,
  priority
}) => {
  const { todoDispatch } = useTodo();

  useEffect(() => {
    console.log(
      `${title} has been marked as ${isComplete ? "completed" : "incomplete"}`
    );
  }, [isComplete]);

  const priorityIcon = (priority: TodoPriority) => {
    switch (priority) {
      case TodoPriority.High:
        return <FcHighPriority />;
      case TodoPriority.Medium:
        return <FcMediumPriority />;
      case TodoPriority.Low:
        return <FcLowPriority />;
      default:
        return null;
    }
  };
  const handleToggleComplete = (todoId: string, isComplete: boolean) => {
    todoDispatch({
      type: "UPDATE_TODO",
      payload: { id: todoId, isComplete: !isComplete }
    });
  };
  return (
    <div key={id} className="todolist">
      <input
        className="todolist-check"
        type="checkbox"
        name={title}
        checked={isComplete}
        onChange={() => handleToggleComplete(id, isComplete)}
      />

      <div className={isComplete ? `completed-todo` : ``}>{title}</div>
      <div className="todolist-subtag ">
        {priorityIcon(priority)}
        <span>
          <AiFillDelete
            className="todo-icon"
            onClick={() =>
              todoDispatch({
                type: "REMOVE_TODO",
                payload: { id, title, isComplete, priority }
              })
            }
          />
        </span>
      </div>
    </div>
  );
};

export default TodoList;
