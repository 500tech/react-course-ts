import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { PageNotFound } from 'ui/PageNotFound';
import { Header } from 'ui/Header';
import { HomePage } from 'ui/HomePage';
import { TodosPage } from 'ui/TodosPage';

const Title = styled.h1`
  margin-top: 0;
  color: ${props => props.theme.palette.primary};
`;

const Page = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 10px;
  background-color: ${props => props.theme.palette.bgColor};
  color: ${props => props.theme.palette.textColor};
`;

export function App() {
  return (
    <Page>
      <Title>Todo list</Title>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/todos" component={TodosPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Page>
  );
}
