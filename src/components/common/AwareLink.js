import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: ${props => (props.match ? 'black' : 'blue')};
  pointer-events: ${props => (props.match ? 'none' : 'all')};

  &:hover {
    color: red;
  }
`;

export const AwareLink = ({ to, exact, children }) => {
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
};
