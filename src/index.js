import React, { Component } from 'react';
import { render } from 'react-dom';

const Todo = ({ todo, toggleTodo }) => (
  <p
    onClick={() => toggleTodo(todo.id)}
    style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
  >
    {todo.text}
  </p>
);

const TodoList = ({ todos, toggleTodo }) => (
  <div>
    {todos.map(todo => (
      <Todo todo={todo} toggleTodo={toggleTodo} key={todo.id} />
    ))}
  </div>
);

function Title({ title, children, hidden }) {
  if (hidden) {
    return null;
  }
  return <h1 style={{ background: 'red' }}>{title ? title : children}</h1>;
}

const Foo = () => <span>Foo</span>;

const todos = [
  { id: 1, text: 'Foobar meow', done: true },
  { id: 2, text: 'Spam buzz pow', done: false },
  { id: 3, text: 'Find better things to do', done: true },
];

class App extends Component {
  state = {
    todos,
  };

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

  render() {
    return (
      <div>
        <Title title="meow" hidden>
          <hr />
          <Foo />
        </Title>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Title title="meow" hidden>
//         <hr />
//         <Foo />
//       </Title>
//       <TodoList todos={todos} />
//     </div>
//   );
// }

render(<App />, document.getElementById('root'));
