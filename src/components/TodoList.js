import React from 'react';
import styled from 'styled-components';
import { Todo } from './Todo';

const List = styled.ul`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}px) {
    li {
      display: inline-block;
      margin-right: 5px;
    }
  }
`;

export function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <List>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </List>
  );
}
