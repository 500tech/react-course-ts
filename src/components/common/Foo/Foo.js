import React, { memo } from 'react';
import styled from 'styled-components';

const BaseFoo = memo(({ className, count }) => (
  <p className={className}>{count}</p>
));

export const Foo = styled(BaseFoo)`
  color: ${props => (props.active ? 'red' : 'green')};

  &:hover {
    opacity: 0.5;
  }
`;
