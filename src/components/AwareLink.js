import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: ${props => (props.match ? 'black' : 'blue')};
  ${props =>
    props.match
      ? `
  pointer-events: none;
  `
      : null}
`;

export function AwareLink({ to, exact, children }) {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        return (
          <StyledLink to={to} match={match}>
            {children}
          </StyledLink>
        );
      }}
    />
  );
}
