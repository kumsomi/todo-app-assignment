import React, { FormEvent, useState } from "react";

export const Todos = () => {
  const [input, setInput] = useState("");

  const addTodos = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className="todo-container">
      <h3>Create your daily tasks</h3>
      <form onSubmit={addTodos} className="form-todo">
        <input
          type="text"
          placeholder="Add todos..."
          className="input-todo"
          onChange={(e) => setInput(e.target.value)}
        />
        {/* <input className="sumbit-btn" type="submit" value="+" /> */}
        <button type="submit" className="submit-btn">
          +
        </button>
      </form>
    </div>
  );
};
