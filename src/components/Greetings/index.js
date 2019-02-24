import memoizeOne from 'memoize-one';
import { connect } from 'react-redux';
import { Greeting as BaseGreeting } from './Greeting';

const getCountOfUndoneTodos = memoizeOne(
  todos => todos && todos.filter(todo => !todo.completed).length
);

function mapStateToProps(state) {
  return {
    count: getCountOfUndoneTodos(state.todos),
  };
}

export const Greeting = connect(mapStateToProps)(BaseGreeting);
