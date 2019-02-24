import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { Greeting } from '../Greetings';
import { Home } from '../../pages/Home';
import { Todos } from '../../pages/Todos';
import { Counter } from '../../pages/Counter';
import { AwareLink } from '../AwareLink';
import Url from '../Url';

const Container = styled.div`
  border: 1px solid lightblue;
`;

export function App({ getTodos }) {
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Container>
      <Greeting name="foobar" />
      <div>
        <Url />
      </div>
      <div>
        <AwareLink to="/" exact>
          Home
        </AwareLink>
        <AwareLink to="/todos" exact>
          Todo Link
        </AwareLink>
        <AwareLink to="/counter" exact>
          Counter
        </AwareLink>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/todos" component={Todos} />
      </Switch>
    </Container>
  );
}
