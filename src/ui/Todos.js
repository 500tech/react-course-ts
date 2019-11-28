import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { TodoAdder } from './TodoAdder';
import { TodoItem } from './TodoItem';

export class BaseTodos extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos, onAdd, onToggle, onDelete } = this.props;
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
}

const withTodos = connect(
  function mapStateToProps(state) {
    return {
      todos: state.todos,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      onAdd: title => dispatch({ type: 'add_todo', payload: title }),
      onToggle: todoId => dispatch({ type: 'toggle_todo', payload: todoId }),
      onDelete: todoId => dispatch({ type: 'delete_todo', payload: todoId }),
      fetchTodos: () =>
        dispatch({
          type: 'fetch_todos',
          meta: {
            api: {
              url: 'https://jsonplaceholder.typicode.com/todos',
              onSuccess: 'sync_todos',
            },
          },
        }),
    };
  }
);

export const Todos = withTodos(BaseTodos);
