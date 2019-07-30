import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export function PageNotFound({ location }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  useEffect(() => {
    const tid = setTimeout(() => {
      setShouldRedirect(true);
    }, 3000);
    return () => clearTimeout(tid);
  }, []);
  if (shouldRedirect) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>404 - page {location.pathname} not found :(</h1>
      <h2>Redirecting you to home page...</h2>
    </div>
  );
}
