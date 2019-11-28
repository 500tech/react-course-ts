import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { TodoAdder } from './TodoAdder';
import { TodoItem } from './TodoItem';
import { TodosConsumer } from '../context/todos';

export function BaseTodos({ todos, onAdd, onToggle, onDelete }) {
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
      <TodoAdder onAdd={onAdd} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}

function withTodos(Component) {
  return function wrapped(props) {
    return (
      <TodosConsumer>
        {todosContext => <Component {...props} {...todosContext} />}
      </TodosConsumer>
    );
  };
}

const withReduxTodos = connect(
  function mapStateToProps(state) {
    return {
      todos: state.todos,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      onAdd: title => dispatch({ type: 'add_todo', payload: title }),
    };
  }
);

export const Todos = withReduxTodos(BaseTodos);

