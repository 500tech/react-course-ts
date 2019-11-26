import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Title } from 'ui/atoms';
import { Home, Todos } from 'ui/organisms';

let _id = 0;
const getId = () => _id++;

const TODOS = [
  { id: getId(), title: 'Eat lunch', completed: true },
  { id: getId(), title: 'Drink third double espresso', completed: false },
];

export class App extends Component {
  state = { todos: TODOS };

  toggleTodo = todoId => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === todoId) {
        // todo.completed = !todo.completed;
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = todoId => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== todoId;
    });
    this.setState({
      todos: newTodos,
    });
  };

  addTodo = title => {
    const todo = { id: getId(), title, completed: false };
    this.setState({ todos: [todo, ...this.state.todos] });
  };

  render() {
    const { titleColor = 'blue' } = this.props;
    const { todos } = this.state;
    return (
      <div className="container">
        <Title color={titleColor}>Hello world!</Title>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/todos"
            render={() => {
              return (
                <Todos
                  todos={todos}
                  addTodo={this.addTodo}
                  toggleTodo={this.toggleTodo}
                  deleteTodo={this.toggleTodo}
                />
              );
            }}
          />
          <Route render={() => <h1>Not found :(</h1>} />
        </Switch>
        <button>Click me!</button>
      </div>
    );
  }
}
