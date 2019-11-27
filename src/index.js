import React, { Component, PureComponent, createRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './index.css';

let _id = 0;
const getId = () => _id++;

const TODOS = [
  { id: getId(), title: 'Have lunch', completed: false },
  { id: getId(), title: 'Have morning coffee', completed: true },
];

class TodoItem extends PureComponent {
  render() {
    const { todo } = this.props;
    console.log('Rendering todo #' + todo.id);

    return (
      <li
        className={todo.completed ? 'completed' : null}
        onClick={event => {
          if (event.ctrlKey || event.metaKey) {
            this.props.onDelete(todo.id);
          } else {
            this.props.onToggle(todo.id);
          }
        }}
      >
        {todo.title}
      </li>
    );
  }
}

class TodoAdder extends Component {
  state = {
    text: '',
  };

  inputRef = createRef();

  componentDidMount() {
    this.inputRef.current.focus();
    this.setAutosubmit();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      this.setAutosubmit();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  setAutosubmit() {
    clearTimeout(this.timerId);
    this.timerId = setTimeout(this.submit, 3000);
  }

  get canSubmit() {
    const { text } = this.state;
    return text.length > 0 && !text.match(/password/i);
  }

  updateText = e => {
    const { value } = e.target;
    if (value.match(/clear/i)) {
      return this.setState({ text: '' });
    }
    this.setState({ text: value });
  };

  submit = e => {
    e && e.preventDefault();
    const { text } = this.state;
    if (this.canSubmit) {
      this.props.onAdd(text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.submit}>
        <input ref={this.inputRef} value={text} onChange={this.updateText} />
        <button disabled={!this.canSubmit}>Add</button>
      </form>
    );
  }
}

const AltTitle = styled.h1`
  background-color: yellow;
  color: ${props => props.color};
`;

class App extends Component {
  state = {
    todos: TODOS,
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
    const { titleColor = 'blue', showTagline } = this.props;

    return (
      <div>
        <AltTitle color={titleColor}>Wierd AF</AltTitle>
        {showTagline ? <p>Tagline</p> : null}
        <TodoAdder onAdd={this.addTodo} />
        <ul>
          {this.state.todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={this.toggleTodo}
              onDelete={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App titleColor="red" />, document.querySelector('#root'));
