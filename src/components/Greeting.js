import React from 'react'; // why do we import React?
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: violet;
`;

export function Greeting({ name = 'stranger' }) {
  return <StyledTitle>Hello, {name}!</StyledTitle>;
}
