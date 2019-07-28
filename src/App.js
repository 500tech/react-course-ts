import React, { createRef } from 'react';
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

function Todo({ todo, onToggleTodo = NOOP, onDeleteTodo = NOOP }) {
  const style = todo.completed ? { textDecoration: 'line-through' } : {};
  return (
    <li
      style={style}
      onClick={e => {
        if (e.ctrlKey || e.metaKey) {
          return onDeleteTodo(todo);
        }
        onToggleTodo(todo);
      }}
    >
      {todo.title}
    </li>
  );
}

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
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

class TodoAdder extends React.Component {
  state = {
    text: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.text !== this.state.text;
  }

  inputRef = createRef();

  startTimer() {
    this.autoSubmitTimer = setTimeout(this.submit, 3000);
  }

  clearTimer() {
    clearTimeout(this.autoSubmitTimer);
  }

  autoFocusInput() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  componentDidMount() {
    this.autoFocusInput();
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  resetTimerOnTextChange(_prevProps, prevState) {
    if (this.state.text !== prevState.text) {
      this.clearTimer();
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.resetTimerOnTextChange(prevProps, prevState);
  }

  submit = e => {
    e && e.preventDefault();
    if (this.state.text) {
      const { onAddTodo = NOOP } = this.props;
      onAddTodo(this.state.text);
      this.setState({ text: '' });
    }
  };

  setText = e => this.setState({ text: e.target.value });

  render() {
    console.log('render todo adder');
    return (
      <form onSubmit={this.submit}>
        <input
          ref={this.inputRef}
          name="todoText"
          type="text"
          value={this.state.text}
          onChange={this.setText}
        />
        <button disabled={this.state.text.length === 0}>Add</button>
      </form>
    );
  }
}

export class App2 extends React.Component {
  state = { todos: TODOS };

  get todos() {
    return this.state.todos;
  }

  set todos(newTodos) {
    this.setState({ todos: newTodos });
  }

  deleteTodo = todo => {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  };

  toggleTodo = todo => {
    this.todos = this.todos.map(t => {
      if (t.id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return t;
    });
  };

  addTodo = text => {
    this.todos = [
      { id: getId(), title: text, completed: false },
      ...this.todos,
    ];
  };

  render() {
    const { greeting = 'Hello', username } = this.props;
    const { todos } = this;
    return (
      <div className="container">
        <h1>
          <span>{username ? `${greeting}, ${username}` : greeting}</span>
        </h1>
        <TodoAdder onAddTodo={this.addTodo} />
        {todos && todos.length ? (
          <TodoList
            todos={todos}
            onToggleTodo={this.toggleTodo}
            onDeleteTodo={this.deleteTodo}
          />
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
