import React, { useMemo, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useTodos } from 'services/todos';
import { Title } from 'ui/common';
import { TodoList } from 'ui/TodoList';
import { TodoAdder } from 'ui/TodoAdder';

export function Todos() {
  const { todos, removeTodo, toggleTodo, addTodo, fetchTodos } = useTodos();
  useEffect(() => {
    if (!todos.length) {
      fetchTodos();
    }
  }, [todos, fetchTodos]);
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
