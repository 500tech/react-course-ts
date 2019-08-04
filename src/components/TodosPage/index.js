import { connect } from 'react-redux';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from 'state/actions';
import { TodosPage as Base } from './TodosPage';

function mapStateToProps({ todos }) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo(title) {
      dispatch({ type: ADD_TODO, payload: title });
    },
    toggleTodo(todo) {
      dispatch({ type: TOGGLE_TODO, payload: todo });
    },
    deleteTodo(todo) {
      dispatch({ type: REMOVE_TODO, payload: todo });
    },
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const TodosPage = connector(Base);
