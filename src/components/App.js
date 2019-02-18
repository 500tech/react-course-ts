import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Foo } from './common/Foo';
import { AddTodo } from './todos/AddTodo';
import { TodoList } from './todos/TodoList';

function fetchFromServer(id) {}

const initialTodos = [
  { id: 1, text: 'Foobar meow', done: true },
  { id: 2, text: 'Spam buzz pow', done: false },
  { id: 3, text: 'Find better things to do', done: true },
];

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  componentDidMount() {
    fetchFromServer(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      fetchFromServer(this.props.id);
    }
  }

  setTodos = todos => this.setState({ todos });

  toggleTodo = tid => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === tid
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      ),
    });
  };

  addTodo = text => {
    const maxId = Math.max(...this.state.todos.map(t => t.id));
    const todo = { id: maxId + 1, text, done: false };
    this.setTodos([...this.state.todos, todo]);
  };

  render() {
    return (
      <div>
        <Foo />
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <p>Home sweet home</p>;
            }}
          />
          <Route
            path="/todos"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={this.addTodo} />
                  <TodoList
                    todos={this.state.todos}
                    toggleTodo={this.toggleTodo}
                  />
                </>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
