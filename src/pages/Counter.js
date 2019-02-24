import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../state/actions/math.actions';

const BaseCounter = ({ count, increment }) => {
  return <p onClick={() => increment()}>{count}</p>;
};

function mapStateToProps(state) {
  return { count: state.count };
}

const mapDispatchToProps = {
  increment,
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const Counter = connector(BaseCounter);
