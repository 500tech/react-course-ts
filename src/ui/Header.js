import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AddressBar } from 'ui/AddressBar';

const TabLink = styled(Link)`
  color: ${props => props.theme.palette.textColor};
`;

const NavBar = styled.nav`
  display: flex;
  * {
    margin: 5px;
  }
`;

export function Header({ toggleTheme }) {
  return (
    <header>
      <AddressBar />
      <button onClick={toggleTheme}>Switch theme</button>
      <NavBar>
        <TabLink to="/">Home</TabLink>
        <TabLink to="/todos">Todos</TabLink>
      </NavBar>
    </header>
  );
}
