import React, { Component, PureComponent, createRef } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';
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

const RudeButton = styled.button`
  :disabled {
    opacity: 0;
  }
`;

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
        <RudeButton disabled={!this.canSubmit}>Add</RudeButton>
      </form>
    );
  }
}

const AltTitle = styled.h1`
  background-color: yellow;
  margin: 0;
  text-decoration: underline;
  color: ${props => props.theme.colors.primary};
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.bgColor};
`;

class App extends Component {
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
          <AltTitle onClick={this.toggleTheme}>Wierd AF</AltTitle>
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
        </Page>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
