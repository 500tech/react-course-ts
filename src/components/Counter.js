import React from 'react';
import styled from 'styled-components';

const prop = propName => props => props[propName];

const ColouredTitle = styled.h1`
  color: ${prop('colour')};
`;

export function Counter({ className, count }) {
  return (
    <ColouredTitle className={className} colour="blue">
      {count}
    </ColouredTitle>
  );
}
