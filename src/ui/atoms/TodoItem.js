import React, { PureComponent } from 'react';

export class TodoItem extends PureComponent {
  render() {
    console.log('render');
    const { todo, onToggle, onDelete } = this.props;
    return (
      <li
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
      </li>
    );
  }
}
