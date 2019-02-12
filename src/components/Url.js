import React from 'react';
import { withRouter } from 'react-router-dom';

export const UrlBase = ({ location, history }) => (
  <p onClick={history.goBack}>{location.pathname}</p>
);

const Url = withRouter(UrlBase);
export default Url;
