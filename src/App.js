import React from 'react';
import { getId } from './utils';

/**
 * interface Todo {
 *   id: number;
 *   title: string;
 *   completed: boolean;
 * }
 */

const NOOP = () => null;

const TODOS = [
  { id: getId(), title: 'Get up in time', completed: true },
  { id: getId(), title: 'Eat at Meatbar', completed: true },
  { id: getId(), title: 'Learn ReactJS', completed: false },
];

// window.todos = TODOS;

function Todo({ todo, onToggleTodo = NOOP }) {
  const style = todo.completed ? { textDecoration: 'line-through' } : {};
  return (
    <li
      style={style}
      onClick={() => {
        onToggleTodo(todo);
      }}
    >
      {todo.title}
    </li>
  );
}

function TodoList({ todos, onToggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
}

function EmptyState() {
  return (
    <h3>
      Nothing to do! <code>goto</code> the beach!
    </h3>
  );
}

export class App2 extends React.Component {
  state = { todos: TODOS };

  toggleTodo = todo => {
    // const todoIndex = this.state.todos.indexOf(todo);
    // this.state.todos[todoIndex].completed = !this.state.todos[todoIndex]
    //   .completed;
    this.setState({
      todos: this.state.todos.map(t => {
        if (t.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return t;
      }),
    });
  };

  render() {
    const { greeting = 'Hello', username } = this.props;
    const { todos } = this.state;
    return (
      <div className="container">
        <h1>
          <span>{username ? `${greeting}, ${username}` : greeting}</span>
        </h1>
        {todos && todos.length ? (
          <TodoList todos={todos} onToggleTodo={this.toggleTodo} />
        ) : (
          <EmptyState />
        )}
      </div>
    );
  }
}

export function App({ greeting = 'Hello', username }) {
  return (
    <div className="container">
      <h1>
        <span>{username ? `${greeting}, ${username}` : greeting}</span>
      </h1>
      {TODOS && TODOS.length ? <TodoList todos={TODOS} /> : <EmptyState />}
    </div>
  );
}
