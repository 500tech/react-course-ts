import React, { Component, PureComponent, createRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let _id = 0;
const getId = () => _id++;

const TODOS = [
  { id: getId(), title: 'Eat lunch', completed: true },
  { id: getId(), title: 'Drink third double espresso', completed: false },
];

window.TODOS = TODOS;

class TodoItem extends PureComponent {
  state = { clicks: 0 };
  render() {
    console.log('render');
    const { todo, onToggle, onDelete } = this.props;
    return (
      <li
        onClick={event => {
          this.setState({ clicks: this.state.clicks + 1 });
          if (event.metaKey) {
            onDelete && onDelete(todo.id);
          } else {
            onToggle && onToggle(todo.id);
          }
        }}
        style={todo.completed ? { textDecoration: 'line-through' } : {}}
      >
        {todo.title} {this.state.clicks}
      </li>
    );
  }
}

const Title = ({ color, children }) => <h1 style={{ color }}>{children}</h1>;

class TodoAdder extends Component {
  state = {
    text: '',
  };

  inputRef = createRef();

  updateText = e => {
    this.setState({ text: e.target.value });
  };

  submit = e => {
    e && e.preventDefault();
    const { onAdd } = this.props;
    const { text } = this.state;
    if (text) {
      onAdd && onAdd(text);
      this.setState({ text: '' });
    }
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          value={this.state.text}
          onChange={this.updateText}
          ref={this.inputRef}
        />
        <button disabled={!this.state.text}>Add</button>
      </form>
    );
  }
}

class App extends Component {
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
        <TodoAdder onAdd={this.addTodo} />
        <ul>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={this.toggleTodo}
              onDelete={this.deleteTodo}
            />
          ))}
        </ul>
        <button>Click me!</button>
      </div>
    );
  }
}

ReactDOM.render(<App titleColor="red"></App>, document.querySelector('#root'));
