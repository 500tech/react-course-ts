import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TODOS = [
  { id: 0, title: 'Eat lunch', completed: true },
  { id: 1, title: 'Drink third double espresso', completed: false },
];

class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li style={todo.completed ? { textDecoration: 'line-through' } : {}}>
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
  render() {
    const { titleColor = 'blue' } = this.props;
    return (
      <div className="container">
        <Title color={titleColor}>Hello world!</Title>
        <ul>
          {TODOS.map(todo => (
            <TodoItem todo={todo} />
          ))}
        </ul>
        <button>Click me!</button>
      </div>
    );
  }
}

ReactDOM.render(<App titleColor="red"></App>, document.querySelector('#root'));
