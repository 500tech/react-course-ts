import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TODOS = [
  { id: 0, title: 'Eat lunch', completed: true },
  { id: 1, title: 'Drink third double espresso', completed: false },
];

window.TODOS = TODOS;

class TodoItem extends Component {
  render() {
    const { todo, onToggle } = this.props;
    return (
      <li
        onClick={() => {
          onToggle && onToggle(todo.id);
        }}
        style={todo.completed ? { textDecoration: 'line-through' } : {}}
      >
        {todo.title}
      </li>
    );
  }
}

class Title extends Component {
  render() {
    const { color, children } = this.props;
    return <h1 style={{ color }}>{children}</h1>;
  }
}

class App extends Component {
  state = { todos: TODOS };

  toggleTodo = todoId => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === todoId) {
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

  render() {
    const { titleColor = 'blue' } = this.props;
    const { todos } = this.state;
    return (
      <div className="container">
        <Title color={titleColor}>Hello world!</Title>
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={this.toggleTodo} />
          ))}
        </ul>
        <button>Click me!</button>
      </div>
    );
  }
}

ReactDOM.render(<App titleColor="red"></App>, document.querySelector('#root'));
