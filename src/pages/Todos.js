import React from 'react';
import { AddTodo } from '../components/todos/AddTodo';
import { TodoList } from '../components/todos/TodoList';
import { TodosContext } from '../components/TodosContext';

export function Todos() {
  return (
    <TodosContext.Consumer>
      {({ addTodo, todos, toggleTodo }) => (
        <>
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </>
      )}
    </TodosContext.Consumer>
  );
}
