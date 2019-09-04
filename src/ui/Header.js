import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  * {
    margin-right: 5px;
  }
`;

const PageLink = styled(Link)`
  color: ${props => props.theme.palette.primary};
`;

export function Header({ toggleTheme }) {
  return (
    <header>
      <select onChange={e => toggleTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <Nav>
        <PageLink to="/">Home</PageLink>
        <PageLink to="/todos">Todos</PageLink>
      </Nav>
    </header>
  );
}
