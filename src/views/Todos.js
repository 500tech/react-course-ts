import React, { useMemo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Title } from 'ui/common';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';

export function Todos({ addTodo, todos, toggleTodo, removeTodo }) {
  const pendingTodosCount = useMemo(
    () => todos.filter(todo => !todo.completed).length,
    [todos]
  );
  return (
    <>
      <Title color={'blue'}>Todo List ({pendingTodosCount})</Title>
      <TodoAdder onAddTodo={addTodo} autoSubmit={pendingTodosCount === 0} />
      <Route
        path="/todos/:todoId"
        render={props => {
          const todoId = +props.match.params.todoId;
          const todo = todos.find(todo => todo.id === todoId);
          if (!todo) {
            return <Redirect to="/todos" />;
          }
          return todo.title;
        }}
      />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onRemoveTodo={removeTodo}
      />
    </>
  );
}
