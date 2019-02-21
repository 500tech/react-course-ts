import React from 'react';
import { useRedux } from '../components/ReduxBridge';

export const Counter = () => {
  const { state, dispatch } = useRedux();
  return <p onClick={() => dispatch({ type: 'INCREMENT' })}>{state.count}</p>;
};
