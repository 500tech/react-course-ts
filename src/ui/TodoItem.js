import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class TodoItem extends PureComponent {
  render() {
    const { todo } = this.props;

    return (
      <li>
        <span
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
        </span>
        <Link to={`/todos/${todo.id}`}>Select</Link>
      </li>
    );
  }
}
