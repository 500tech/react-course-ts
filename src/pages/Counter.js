import React from 'react';
import { withRedux } from '../components/ReduxBridge';

const BaseCounter = ({ state, dispatch }) => {
  return <p onClick={() => dispatch({ type: 'INCREMENT' })}>{state.count}</p>;
};

export const Counter = withRedux(BaseCounter);
