import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TabsRow from './components/TabsRow';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

const Container = styled.div`
  border: 1px solid lightblue;
`;

// @TODO: create a catchall (404) route
export default function App() {
  return (
    <Router>
      <Container>
        <TabsRow />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/todos" component={TodoPage} />
        </Switch>
      </Container>
    </Router>
  );
}
