import React from 'react';
import Todo, { TodoType } from './Todo';
import PropTypes from 'prop-types';

export default function TodoList({ todos = [], toggleDone }) {
  return (
    <ol>
      {todos.map((todo, idx) => (
        <Todo
          key={idx}
          todo={todo}
          toggleDone={() => toggleDone(idx)}
        />
      ))}
    </ol>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType).isRequired,
  toggleDone: PropTypes.func.isRequired,
};
