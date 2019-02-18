import React from 'react';
import { withRouter } from 'react-router-dom';

const BaseAdreesBar = ({ location, history }) => {
  const { pathname } = location;
  const { goBack, goForward } = history;
  return (
    <p>
      <span onClick={goBack}>{'<'}</span>
      <span>{pathname}</span>
      <span onClick={goForward}>{'>'}</span>
    </p>
  );
};

export const AddressBar = withRouter(BaseAdreesBar);
