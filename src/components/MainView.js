import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { TodosPage } from './TodosPage';
import { PageNotFound } from './NotFound';

export function MainView() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/todos" component={TodosPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
