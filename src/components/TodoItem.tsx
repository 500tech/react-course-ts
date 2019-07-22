import React from "react";
import styled from "styled-components";
import { Todo } from "../services/todos";

const Item = styled.li<{ decoration: string }>`
  text-decoration: ${props => props.decoration};
`;

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
  return (
    <Item
      decoration={todo.done ? "line-through" : "none"}
      onClick={e =>
        e.metaKey || e.ctrlKey ? onRemoveTodo(todo) : onToggleTodo(todo)
      }
    >
      {todo.text}
    </Item>
  );
};
