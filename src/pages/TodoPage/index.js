import { connect } from 'react-redux';
import todos from '../../store/todos';
import TodosPage from './TodoPage';

function mapStateToProps(state) {
  return {
    todos: todos.selectors.getTodos(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos() {
      dispatch(todos.actions.getTodos());
    },
    createTodo(todo) {
      dispatch(todos.actions.createTodo(todo));
    },
    toggleTodo(idx) {
      dispatch(todos.actions.toggleTodo(idx));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosPage);
