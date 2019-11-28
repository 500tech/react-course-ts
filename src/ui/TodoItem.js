import React, { PureComponent } from 'react';

export class TodoItem extends PureComponent {
  render() {
    const { todo } = this.props;

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
