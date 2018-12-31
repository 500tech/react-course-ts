import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Tab = styled.div`
  display: inline-block;
  padding: 5px;
`;

export default function TabsRow() {
  return (
    <div>
      <Tab>
        <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
      </Tab>
      <Tab>
        <NavLink activeClassName="active-link" to="/todos">Todos</NavLink>
      </Tab>
    </div>
  );
}
