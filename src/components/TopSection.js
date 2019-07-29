import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AddressBar } from './AddressBar';

const NavBar = styled.nav`
  > * {
    display: inline-block;
    margin: 5px;
  }
`;

export function TopSection({ username, greeting, setTheme, theme }) {
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
      <select onChange={setTheme} value={theme}>
        <option value="redhat">Redhat</option>
        <option value="facebook">facebook</option>
      </select>
    </>
  );
}
