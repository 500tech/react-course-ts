import React from 'react';
import { connect } from 'react-redux';

const BaseCounter = ({ count, increment }) => {
  return <p onClick={increment}>{count}</p>;
};

function mapStateToProps(state) {
  return { count: state.count };
}

function mapDispatchToProps(dispatch) {
  return { increment: () => dispatch({ type: 'INCREMENT' }) };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const Counter = connector(BaseCounter);
