import React from 'react';
import styled from 'styled-components';
import { TopSection } from './TopSection';
import { MainView } from './MainView';

export function App({ greeting = 'Hello', username }) {
  return (
    <Container>
      <TopSection username={username} greeting={greeting} />
      <MainView />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme.palette.appBackground};
`;
