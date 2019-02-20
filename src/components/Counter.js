import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const prop = propName => props => props[propName];

const ColouredTitle = styled.h1`
  color: ${prop('colour')};
`;

export function BaseCounter({ className, count, increment }) {
  return (
    <ColouredTitle className={className} colour="blue" onClick={increment}>
      {count}
    </ColouredTitle>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment() {
      dispatch({ type: 'INCREMENT' });
    },
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export const Counter = connector(BaseCounter);
