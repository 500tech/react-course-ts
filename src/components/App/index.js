import { connect } from 'react-redux';
import BaseApp from './App';
import * as countActions from '../../state/actions/count.actions';

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

const betterMapDispatchToProps = {
  incrementCount: countActions.increment,
  decrementCount: countActions.decrement,
  setCount: countActions.setCount,
};

function mockMapDispatchToProps(dispatch) {
  return Object.keys(betterMapDispatchToProps).reduce((mapper, prop) => {
    mapper[prop] = (...args) => dispatch(betterMapDispatchToProps[prop](...args));
    return mapper;
  }, {});
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCount() {
      dispatch(countActions.increment());
    },
    decrementCount() {
      dispatch(countActions.decrement());
    },
    setCount(count) {
      dispatch(countActions.setCount(count));
    },
  };
}

const connector = connect(
  mapStateToProps,
  mockMapDispatchToProps
);

export const App = connector(BaseApp);
