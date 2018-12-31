import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TabsRow from './components/TabsRow';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import CounterPage from './pages/CounterPage';
import PageNoutFound from './pages/404Page';

const Container = styled.div`
  border: 1px solid lightblue;
`;

const tabs = [
  { name: 'Home', path: '/', exact: true },
  { name: 'Todos', path: '/todos' },
  { name: 'Counter', path: '/counter' },
];

export default function App() {
  return (
    <Router>
      <Container>
        <TabsRow tabs={tabs} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/todos" component={TodoPage} />
          <Route path="/counter" component={CounterPage} />
          <Route component={PageNoutFound} />
        </Switch>
      </Container>
    </Router>
  );
}
