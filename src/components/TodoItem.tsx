import React from "react";
import { Todo } from "../services/todos";

const NOOP = () => null;

interface TodoProps {
  todo: Todo;
  onToggleTodo?: (todo: Todo) => void;
  onRemoveTodo?: (todo: Todo) => void;
}

export const TodoItem: React.FC<TodoProps> = ({
  todo,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP
}) => {
  console.log("render");
  const style = { textDecoration: todo.done ? "line-through" : "none" };
  return (
    <li
      style={style}
      onClick={e =>
        e.metaKey || e.ctrlKey ? onRemoveTodo(todo) : onToggleTodo(todo)
      }
    >
      {todo.text}
    </li>
  );
};
