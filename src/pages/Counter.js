import React from 'react';
import { withRedux } from '../components/ReduxBridge';

const BaseCounter = ({ count, increment }) => {
  return <p onClick={increment}>{count}</p>;
};

export const Counter = withRedux(BaseCounter, (state, dispatch) => ({
  count: state.count,
  increment: () => dispatch({ type: 'INCREMENT' }),
}));
