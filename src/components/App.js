import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { PageNotFound } from './PageNotFound';
import { AddressBar } from './AddressBar';
import { Home } from './Home';
import { TodosPage } from './TodosPage';
import { useThemeService } from 'services/theme';

const Container = styled.div`
  background-color: ${props => props.theme.palette.bgcolor};
  font-size: 18px;
`;

export function App() {
  const { toggleTheme } = useThemeService();

  return (
    <Container onClick={toggleTheme}>
      <AddressBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={TodosPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Container>
  );
}
