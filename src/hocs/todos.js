import React from 'react';
import { TodosConsumer } from 'providers/todos';

export function withTodos(Component) {
  return function WrapperComponent(props) {
    return (
      <TodosConsumer>
        {ctx => {
          return <Component {...ctx} {...props} />;
        }}
      </TodosConsumer>
    );
  };
}