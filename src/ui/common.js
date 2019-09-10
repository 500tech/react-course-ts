import React from 'react';
import styled from 'styled-components';

export const BorderedContainer = styled.div`
  border: 1px solid black;

  &:hover {
    background-color: pink;
  }
`;

export const Title = styled.h1`
  user-select: none;
  color: ${props => props.color};
`;

// function styledH1(strings, ...values) {
//   return function Component(props) {
//     const className = createClassName(strings, values.map(fn => fn(props)))
//     return <h1 className={className} {...props} />
//   }
// }
