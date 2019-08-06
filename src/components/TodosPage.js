import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TodoAdder } from './TodoAdder';
import { NoItemsEmptyState } from './atoms';
import { TodoList } from './TodoList';
import { useTodosService } from 'services/todos';
import { useThemeService } from 'services/theme';

export const TodosPage = () => {
  const { todos, removeTodo, toggleTodo, addTodo } = useTodosService();
  const { toggleTheme } = useThemeService();
  return (
    <>
      <h1 onClick={toggleTheme}>Todo list</h1>
      <TodoAdder onAddTodo={addTodo} />
      {todos.length ? (
        <TodoList
          items={todos}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
        />
      ) : (
        <NoItemsEmptyState />
      )}
      <Route
        path="/todos/:todoId"
        render={({ match }) => {
          const { params } = match;
          const { todoId } = params;
          const todo = todos.find(t => t.id === todoId);
          if (!todo) {
            return <Redirect to="/todos" />;
          }
          return <p>{todo.text}</p>;
        }}
      />
    </>
  );
};
