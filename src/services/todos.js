import { useSelector } from 'react-redux';
import { useAction } from 'utils';
import * as actions from 'state/actions';

export function useTodosService() {
  const todos = useSelector(state => state.todos);
  const addTodo = useAction(actions.addTodo);
  const removeTodo = useAction(actions.removeTodo);
  const updateTodo = useAction(actions.updateTodo);
  return { todos, updateTodo, removeTodo, addTodo };
}
