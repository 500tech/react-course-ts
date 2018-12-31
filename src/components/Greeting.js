import React from 'react';
import styled from 'styled-components';

const GreetingTitle = styled.h1`
  color: violet;
`;

export default function Greeting({ name = 'stranger' }) {
  return <GreetingTitle>Hello, {name}!</GreetingTitle>;
}
