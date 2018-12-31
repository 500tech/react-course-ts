import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Tab = styled.div`
  display: inline-block;
  padding: 5px;
`;

// @TODO make the links react to view
// use: https://reacttraining.com/react-router/web/guides/quick-start
export default function TabsRow() {
  return (
    <div>
      <Tab>
        <Link to="/">Home</Link>
      </Tab>
      <Tab>
        <Link to="/todos">Todos</Link>
      </Tab>
    </div>
  );
}
