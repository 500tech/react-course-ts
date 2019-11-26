import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TodoList, TodoAdder } from 'ui/mols';

export function Todos({ todos, addTodo, toggleTodo, deleteTodo }) {
  return (
    <>
      <Route
        path="/todos/:todoId"
        render={({ match }) => {
          const { todoId } = match.params;
          const todo = todos.find(todo => todo.id === +todoId);
          if (!todo) {
            return <Redirect to="/todos" />;
          }
          return <p>{JSON.stringify(todo)}</p>;
        }}
      />
      <TodoAdder
        key={todos.length}
        initialText={`Todo #${todos.length + 1}`}
        onAdd={addTodo}
      />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </>
  );
}
