import React from 'react';
import Todo, { TodoType } from './Todo';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function TodoList({ todos = [], toggleDone, match }) {
  return (
    <ol>
      {todos.map((todo, idx) => (
        <Todo
          key={idx}
          active={idx === +match.params.todosIndex}
          todo={todo}
          toggleDone={() => toggleDone(idx)}
        />
      ))}
    </ol>
  );
}

export default withRouter(TodoList);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType).isRequired,
  toggleDone: PropTypes.func.isRequired,
};
