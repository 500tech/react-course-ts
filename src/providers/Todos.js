import React, { createContext, Component } from 'react';
import { getId } from 'utils';

const TodosContext = createContext();

const TODOS = [
  { id: getId(), title: 'Get up in time', completed: true },
  { id: getId(), title: 'Eat at Meatbar', completed: true },
  { id: getId(), title: 'Learn ReactJS', completed: false },
];

export function withTodos(Component) {
  return function WrappedWithTodos(props) {
    return (
      <TodosContext.Consumer>
        {ctx => {
          return <Component {...ctx} {...props} />;
        }}
      </TodosContext.Consumer>
    );
  };
}

export class TodosProvider extends Component {
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
    const { children } = this.props;
    const { todos, deleteTodo, addTodo, toggleTodo } = this;
    const ctx = { todos, deleteTodo, addTodo, toggleTodo };
    return (
      <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>
    );
  }
}
