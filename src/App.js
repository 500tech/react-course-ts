import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TabsRow from './components/TabsRow';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import PageNoutFound from './pages/404Page';

const Container = styled.div`
  border: 1px solid lightblue;
`;

// @TODO hook up the redux to the react app
export default function App() {
  return (
    <Router>
      <Container>
        <TabsRow />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/todos" component={TodoPage} />
          <Route component={PageNoutFound} />
        </Switch>
      </Container>
    </Router>
  );
}
