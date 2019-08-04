import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TopSection } from './TopSection';
import { MainView } from './MainView';
import * as themes from '../theme';

export class App extends React.Component {
  state = { theme: 'redhat' };

  setTheme = e => this.setState({ theme: e.target.value });

  render() {
    const { greeting = 'Hello', username } = this.props;
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <Container>
          <TopSection
            username={username}
            greeting={greeting}
            setTheme={this.setTheme}
            theme={this.state.theme}
          />
          <MainView />
        </Container>
      </ThemeProvider>
    );
  }
}

const Container = styled.div`
  background-color: ${props => props.theme.palette.appBackground};
`;
