import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => (
  <div className="list-wrapper">
    {todo.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);
