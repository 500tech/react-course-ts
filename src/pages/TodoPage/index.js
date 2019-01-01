import { connect } from 'react-redux';
import * as todos from '../../store/todos';
import TodosPage from './TodoPage';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos() {
      dispatch(todos.getTodos());
    },
    createTodo(todo) {
      dispatch(todos.createTodo(todo));
    },
    toggleTodo(idx) {
      dispatch(todos.toggleTodo(idx));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosPage);
