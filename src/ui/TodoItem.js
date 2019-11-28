import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function withMountLog(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(WrappedComponent.name);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

const LinkButton = styled(Link)`
  display: inline-block;
  border: 1px solid salmon;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 1px 1px 5px black;
  width: min-content;
  background: white;
  color: salmon !important;
  text-decoration: none;
`;

export class BaseTodoItem extends PureComponent {
  componentDidMount() {
    console.log('meow');
  }
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
        <LinkButton to={`/todos/${todo.id}`}>Select</LinkButton>
      </li>
    );
  }
}

export const TodoItem = withMountLog(BaseTodoItem);
