import React from 'react'; // why do we import React?
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: violet;
`;

const RightDiv = styled.div`
  float: right;
`;

export function Greeting({ name = 'stranger', count = 0 }) {
  return (
    <StyledTitle>
      Hello, {name}! <RightDiv>{count}</RightDiv>
    </StyledTitle>
  );
}
