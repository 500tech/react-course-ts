import React, { useContext } from 'react';
import styled from 'styled-components';
import { CountContext } from './CountContext';

const prop = propName => props => props[propName];

const ColouredTitle = styled.h1`
  color: ${prop('colour')};
`;

export function Counter({ className }) {
  const count = useContext(CountContext);
  return (
    <ColouredTitle className={className} colour="blue">
      {count}
    </ColouredTitle>
  );
}
