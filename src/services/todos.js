import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from 'state/actions';

export function useTodosService() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const toggleTodo = todo => dispatch({ type: TOGGLE_TODO, payload: todo });
  const removeTodo = todo => dispatch({ type: REMOVE_TODO, payload: todo });
  const addTodo = text => dispatch({ type: ADD_TODO, payload: text });

  return { todos, toggleTodo, removeTodo, addTodo };
}
