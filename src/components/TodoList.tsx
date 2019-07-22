import React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "../services/todos";

interface TodoListProps {
  items: Todo[];
  onToggleTodo?: (todo: Todo) => void;
  onRemoveTodo?: (todo: Todo) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  items,
  onToggleTodo,
  onRemoveTodo
}) => {
  return (
    <ul>
      {items.map(item => (
        <TodoItem
          key={item.id}
          todo={item}
          onToggleTodo={onToggleTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
};
