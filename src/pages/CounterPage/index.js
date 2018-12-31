import { connect } from 'react-redux';
import * as counter from '../../store/counter';
import CounterPage from './CounterPage'

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment() {
      dispatch(counter.increment());
    },
    decrement() {
      dispatch(counter.decrement());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
