import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Todo } from "../state/types";

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
        {todo.title}
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
    ${props => props.todo.completed && strikeThrough}
    color: ${props =>
      props.todo.completed ? props.theme.colors.primary : props.theme.colors.error};
  }
`;
