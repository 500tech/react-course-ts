import React from 'react';
import styled from 'styled-components';
import { CountConsumer } from './CountContext';

const prop = propName => props => props[propName];

const ColouredTitle = styled.h1`
  color: ${prop('colour')};
`;

export function Counter({ className }) {
  return (
    <ColouredTitle className={className} colour="blue">
      <CountConsumer>{count => count}</CountConsumer>
    </ColouredTitle>
  );
}
