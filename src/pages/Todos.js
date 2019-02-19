import React from 'react';
import { connect } from 'react-redux';
import { AddTodo } from '../components/todos/AddTodo';
import { TodoList } from '../components/todos/TodoList';
import { addTodo, toggleTodo } from '../state/actions/todos.actions';

function BaseTodos({ addTodo, todos, toggleTodo }) {
  return (
    <>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo(text) {
      dispatch(addTodo(text));
    },
    toggleTodo(tid) {
      dispatch(toggleTodo(tid));
    },
  };
}

export const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseTodos);
