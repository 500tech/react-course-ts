import React from 'react';
import styled from 'styled-components';
import { useRedux } from './ReduxBridge'

const prop = propName => props => props[propName];

const ColouredTitle = styled.h1`
  color: ${prop('colour')};
`;

export function Counter({ className }) {
  const { state } = useRedux();
  return (
    <ColouredTitle className={className} colour="blue">
      {state.count}
    </ColouredTitle>
  );
}
