import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AddressBar } from '../AddressBar';
import * as themes from 'theme';

const NavBar = styled.nav`
  > * {
    display: inline-block;
    margin: 5px;
  }
`;

export function TopSection({ username, greeting, themeName, setThemeName }) {
  return (
    <>
      <h1>
        <span>{username ? `${greeting}, ${username}` : greeting}</span>
      </h1>
      <AddressBar />
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
      </NavBar>
      <select onChange={e => setThemeName(e.target.value)} value={themeName}>
        {Object.keys(themes).map(themeName => {
          return (
            <option key={themeName} value={themeName}>
              {themeName}
            </option>
          );
        })}
      </select>
    </>
  );
}
