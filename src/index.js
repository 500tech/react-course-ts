import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
*/

let _id = 0;
const getId = () => _id++;

const TODOS = [
  { id: getId(), title: 'Have lunch', completed: false },
  { id: getId(), title: 'Have morning coffee', completed: true },
];

window.TODOS = TODOS;

class TodoItem extends Component {
  render() {
    const { todo } = this.props;

    return (
      <li
        className={todo.completed ? 'completed' : null}
        onClick={() => {
          this.props.onToggle(todo.id);
        }}
      >
        {todo.title}
      </li>
    );
  }
}

class Title extends Component {
  render() {
    const { children, color } = this.props;
    return <h1 style={{ color, backgroundColor: 'yellow' }}>{children}</h1>;
  }
}

class App extends Component {
  state = {
    todos: TODOS,
  };

  toggleTodo = todoId => {
    const todosAfterChange = this.state.todos.map(todo => {
      if (todo.id === todoId) {
        // return {
        //   ...todo,
        //   completed: !todo.completed
        // };
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: todosAfterChange,
    });
  };

  render() {
    const { titleColor = 'blue', showTagline } = this.props;

    return (
      <div>
        <Title color={titleColor}>Have a great evening!</Title>
        {showTagline ? <p>Tagline</p> : null}
        <ul>
          {this.state.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={this.toggleTodo} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App titleColor="red" />, document.querySelector('#root'));
