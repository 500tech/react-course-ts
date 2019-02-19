import { connect } from 'react-redux';
import { AddTodo as BaseAddTodo } from './AddTodo';
import { increment } from '../../../state/actions/count.actions';

const mapStateToProps = () => ({});
function mapDispatchToProps(dispatch) {
  return {
    increment() {
      dispatch(increment());
    },
  };
}

export const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseAddTodo);
