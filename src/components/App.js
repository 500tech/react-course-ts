import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Foo } from './common/Foo';
import { AwareLink } from './common/AwareLink';
import { AddressBar } from './common/AddressBar';
import { Home } from '../pages/Home';
import { Todos } from '../pages/Todos';

function fetchFromServer(id) {}

export class App extends Component {
  componentDidMount() {
    fetchFromServer(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      fetchFromServer(this.props.id);
    }
  }

  render() {
    return (
      <div>
        <Foo />
        <AddressBar />
        <div>
          <AwareLink to="/" exact>
            Home
          </AwareLink>
          <AwareLink to="/todos">Todos</AwareLink>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todos" component={Todos} />
        </Switch>
      </div>
    );
  }
}
