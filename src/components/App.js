import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TopSection } from './TopSection';
import { MainView } from './MainView';
import { withThemeName } from 'providers/ThemeName';
import * as themes from '../theme';

function BaseApp({ greeting = 'Hello', username, themeName }) {
  return (
    <ThemeProvider theme={themes[themeName]}>
      <Container>
        <TopSection username={username} greeting={greeting} />
        <MainView />
      </Container>
    </ThemeProvider>
  );
}

export const App = withThemeName(BaseApp);

const Container = styled.div`
  background-color: ${props => props.theme.palette.appBackground};
`;
