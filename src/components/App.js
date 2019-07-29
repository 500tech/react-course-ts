import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getId } from '../utils';
import { TodoAdder } from './TodoAdder';
import { TodoList } from './TodoList';
import * as themes from '../theme';

/**
 * interface Todo {
 *   id: number;
 *   title: string;
 *   completed: boolean;
 * }
 */

const TODOS = [
  { id: getId(), title: 'Get up in time', completed: true },
  { id: getId(), title: 'Eat at Meatbar', completed: true },
  { id: getId(), title: 'Learn ReactJS', completed: false },
];

const Box = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: ivory;

  code {
    background-color: grey;
    color: limegreen;

    &:hover {
      color: red;
    }
  }
`;

function EmptyState() {
  return (
    <Box>
      <h3>
        Nothing to do! <code>goto</code> the beach!
      </h3>
    </Box>
  );
}

export class App extends React.Component {
  state = { todos: TODOS, theme: 'redhat' };

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

  setTheme = e => this.setState({ theme: e.target.value });

  render() {
    const { greeting = 'Hello', username } = this.props;
    const { todos } = this;
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <div className="container">
          <h1>
            <span>{username ? `${greeting}, ${username}` : greeting}</span>
          </h1>
          <select onChange={this.setTheme} value={this.state.theme}>
            <option value="redhat">Redhat</option>
            <option value="facebook">facebook</option>
          </select>
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
      </ThemeProvider>
    );
  }
}
