import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../themes';
import { Home } from './Home';
import { Todos } from './Todos';
import { Page, Title } from './common';
import { PageNotFound } from './PageNotFound';

const Back = withRouter(function Back({ history }) {
  return <button onClick={history.goBack}>Back</button>;
});

export class App extends Component {
  state = {
    theme: matchMedia('(prefers-color-scheme: dark)').matches
      ? darkTheme
      : lightTheme,
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === lightTheme ? darkTheme : lightTheme,
    });
  };

  render() {
    const { showTagline } = this.props;

    return (
      <ThemeProvider theme={this.state.theme}>
        <Page>
          <header style={{ display: 'flex' }}>
            <Back />
            <Link to="/">Home</Link>
            <Link to="/todos">Todos</Link>
            <Link to="/foo">Amazing Page</Link>
          </header>
          <Title onClick={this.toggleTheme}>Wierd AF</Title>
          {showTagline ? <p>Tagline</p> : null}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/todos" component={Todos} />
            <Route component={PageNotFound} />
          </Switch>
        </Page>
      </ThemeProvider>
    );
  }
}
