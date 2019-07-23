import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Todo } from "../services/todos";

const NOOP = () => null;

interface TodoProps {
  todo: Todo;
  onToggleTodo?: (todo: Todo) => void;
  onRemoveTodo?: (todo: Todo) => void;
  className?: string;
}

const UnstyledTodoItem: React.FC<TodoProps> = ({
  todo,
  className,
  onToggleTodo = NOOP,
  onRemoveTodo = NOOP
}) => {
  return (
    <li className={className}>
      <span
        onClick={e =>
          e.metaKey || e.ctrlKey ? onRemoveTodo(todo) : onToggleTodo(todo)
        }
      >
        {todo.text}
      </span>
      <Link to={`/todos/${todo.id}`}>Select</Link>
    </li>
  );
};

const strikeThrough = css`
  text-decoration: line-through;
`;

export const TodoItem = styled(UnstyledTodoItem)`
  span {
    ${props => props.todo.done && strikeThrough}
    color: ${props =>
      props.todo.done ? props.theme.colors.primary : props.theme.colors.error};
  }
`;
