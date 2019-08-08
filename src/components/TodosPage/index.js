import { connect } from 'react-redux';
import {
  POST_TODO,
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
            url: 'http://localhost:8080/todos',
          },
        },
      });
    },
    addTodo(title) {
      dispatch({
        type: POST_TODO,
        payload: { title, completed: false },
        meta: {
          api: {
            group: 'add-todo',
            url: 'http://localhost:8080/todos',
            method: 'POST',
            onSuccess: ADD_TODO,
            data: { title, completed: false },
          },
        },
      });
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
