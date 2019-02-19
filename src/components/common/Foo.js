import React, { memo } from 'react';
import styled from 'styled-components';
import { ReduxConsumer } from '../../ReduxBridge';

const BaseFoo = memo(({ className }) => (
  <p className={className}>
    <ReduxConsumer>{({ state }) => state.count}</ReduxConsumer>
  </p>
));

export const Foo = styled(BaseFoo)`
  color: ${props => (props.active ? 'red' : 'green')};

  &:hover {
    opacity: 0.5;
  }
`;
