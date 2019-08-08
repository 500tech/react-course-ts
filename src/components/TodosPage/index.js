import { connect } from 'react-redux';
import { addTodo, fetchTodos, updateTodo, deleteTodo } from 'state/actions';
import { TodosPage as Base } from './TodosPage';

function mapStateToProps({ todos, net }) {
  return { todos, isLoading: !!net.todos };
}

const mapDispatchToProps = {
  fetchTodos,
  addTodo,
  toggleTodo: todo => updateTodo({ ...todo, completed: !todo.completed }),
  deleteTodo,
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const TodosPage = connector(Base);
