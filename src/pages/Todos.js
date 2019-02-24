import React from 'react';
import { connect } from 'react-redux';
import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';
import {
  toggleTodo,
  addTodo,
  removeTodo,
} from '../state/actions/todos.actions';

export function BaseTodos({ todos, onAddTodo, toggleTodo, onRemoveTodo }) {
  return (
    <>
      <AddTodo onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={onRemoveTodo}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

const mapDispatchToProps = {
  toggleTodo,
  onAddTodo: addTodo,
  onRemoveTodo: removeTodo,
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const Todos = connector(BaseTodos);
