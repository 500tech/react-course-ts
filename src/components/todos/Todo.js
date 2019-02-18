import React from 'react';
import styled from 'styled-components';

const BaseTodo = ({ className, todo, toggleTodo }) => (
  <p onClick={() => toggleTodo(todo.id)} className={className}>
    {todo.text}
  </p>
);

export const Todo = styled(BaseTodo)`
  text-decoration: ${props => (props.todo.done ? 'line-through' : 'none')};
`;
