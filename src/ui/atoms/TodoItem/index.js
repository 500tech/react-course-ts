import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class TodoItem extends PureComponent {
  render() {
    console.log('render');
    const { todo, onToggle, onDelete } = this.props;
    return (
      <li>
        <span
          onClick={event => {
            if (event.metaKey) {
              onDelete && onDelete(todo.id);
            } else {
              onToggle && onToggle(todo.id);
            }
          }}
          style={todo.completed ? { textDecoration: 'line-through' } : {}}
        >
          {todo.title}
        </span>
        <Link to={`/todos/${todo.id}`}>Select todo</Link>
      </li>
    );
  }
}
