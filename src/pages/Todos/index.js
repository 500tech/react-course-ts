import { connect } from 'react-redux';
import { Todos as BaseTodos } from './Todos'
import {
  toggleTodo,
  addTodo,
  removeTodo,
} from '../../state/actions/todos.actions';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

const mapDispatchToProps = {
  toggleTodo,
  onAddTodo: addTodo,
  onRemoveTodo: removeTodo,
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const Todos = connector(BaseTodos);
