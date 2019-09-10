import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export function PageNotFound({ location }) {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => count - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  if (!count) {
    return <Redirect to="/" />;
  }
  return (
    <h2>
      404 - page <code>{location.pathname}</code> not found :( Redirecting in:{' '}
      {count}...
    </h2>
  );
}
