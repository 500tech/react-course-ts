import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { getId } from '../utils';
import { Home } from './Home';
import { TopSection } from './TopSection';
import { TodosPage } from './TodosPage';
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
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <Container>
          <TopSection
            username={username}
            greeting={greeting}
            setTheme={this.setTheme}
            theme={this.state.theme}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/todos"
              render={() => (
                <TodosPage
                  onDeleteTodo={this.deleteTodo}
                  onAddTodo={this.addTodo}
                  onToggleTodo={this.toggleTodo}
                  todos={this.todos}
                />
              )}
            />
          </Switch>
        </Container>
      </ThemeProvider>
    );
  }
}

const Container = styled.div`
  background-color: ${props => props.theme.palette.appBackground};
`;
