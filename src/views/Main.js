import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'views/Home';
import { Todos } from 'views/Todos';
import { PageNotFound } from 'views/PageNotFound';

export function MainView() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/todos" component={Todos} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
