import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../themes';
import { Home } from './Home';
import { Todos } from './Todos';
import { Page, Title } from './common';

let _id = 0;
const getId = () => _id++;

const TODOS = [
  { id: getId(), title: 'Have lunch', completed: false },
  { id: getId(), title: 'Have morning coffee', completed: true },
];

export class App extends Component {
  state = {
    todos: TODOS,
    theme: matchMedia('(prefers-color-scheme: dark)').matches
      ? darkTheme
      : lightTheme,
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === lightTheme ? darkTheme : lightTheme,
    });
  };

  toggleTodo = todoId => {
    const todosAfterChange = this.state.todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.setState({
      todos: todosAfterChange,
    });
  };

  deleteTodo = todoId => {
    const todosAfterChange = this.state.todos.filter(todo => {
      return todo.id !== todoId;
    });
    this.setState({
      todos: todosAfterChange,
    });
  };

  addTodo = title => {
    const todo = { id: getId(), title, completed: false };
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  render() {
    const { showTagline } = this.props;

    return (
      <ThemeProvider theme={this.state.theme}>
        <Page>
          <Title onClick={this.toggleTheme}>Wierd AF</Title>
          {showTagline ? <p>Tagline</p> : null}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/todos"
              render={() => (
                <Todos
                  todos={this.state.todos}
                  onAdd={this.addTodo}
                  onDelete={this.deleteTodo}
                  onToggle={this.toggleTodo}
                />
              )}
            />
            <Route render={() => <h1>Page not found :(</h1>} />
          </Switch>
        </Page>
      </ThemeProvider>
    );
  }
}
