import memoizeOne from 'memoize-one';
import { connect } from 'react-redux';
import { Greeting as BaseGreeting } from './Greeting';

const getCountOfUndoneTodos = memoizeOne(
  todos => todos.filter(todo => !todo.done).length
);

function mapStateToProps(state) {
  return {
    count: getCountOfUndoneTodos(state.todos),
  };
}

export const Greeting = connect(mapStateToProps)(BaseGreeting);
