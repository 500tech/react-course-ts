import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.palette.primary};
`;

export function HomePage() {
  return <Title>This be home</Title>;
}
