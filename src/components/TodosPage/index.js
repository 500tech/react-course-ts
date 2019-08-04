import { connect } from 'react-redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_TODOS,
  SET_TODOS,
} from 'state/actions';
import { TodosPage as Base } from './TodosPage';

function mapStateToProps({ todos, net }) {
  return { todos, isLoading: !!net.todos };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos() {
      dispatch({
        type: FETCH_TODOS,
        meta: {
          api: {
            group: 'todos',
            onSuccess: SET_TODOS,
            url: 'https://jsonplaceholder.typicode.com/todos',
          },
        },
      });
    },
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
