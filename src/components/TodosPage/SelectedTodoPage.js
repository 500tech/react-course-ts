import React from 'react';
import memoize from 'memoize-one';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function BaseSelectedTodoPage({ todo }) {
  if (!todo) {
    return <Redirect to="/404" />;
  }
  return <p>{todo.title}</p>;
}

const findTodo = memoize((todos, todoId) => {
  return todos.find(t => t.id === +todoId);
});

const mapStateToProps = ({ todos }, { match }) => ({
  todo: findTodo(todos, match.params.todoId),
});

const connector = connect(mapStateToProps);

export const SelectedTodoPage = connector(BaseSelectedTodoPage);
