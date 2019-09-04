import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AddressBar } from 'ui/AddressBar';
import * as themes from 'themes';
import { setTheme } from 'state/actions';
import { useAction } from 'utils';
const THEME_NAMES = Object.keys(themes);

const Nav = styled.nav`
  * {
    margin-right: 5px;
  }
`;

const PageLink = styled(Link)`
  color: ${props => props.theme.palette.primary};
`;

export function Header() {
  const dispatchSetTheme = useAction(setTheme);
  return (
    <header>
      <AddressBar />
      <select onChange={e => dispatchSetTheme(e.target.value)}>
        {THEME_NAMES.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <Nav>
        <PageLink to="/">Home</PageLink>
        <PageLink to="/todos">Todos</PageLink>
      </Nav>
    </header>
  );
}
