import React from 'react';
import styled from 'styled-components';
import { NOOP } from 'utils';

export const BorderedContainer = styled.div`
  border: 1px solid black;

  &:hover {
    background-color: pink;
  }
`;

export function Title({ color, children, onChangeColor = NOOP }) {
  return (
    <h1 style={{ color, userSelect: 'none' }} onClick={onChangeColor}>
      {children}
    </h1>
  );
}
