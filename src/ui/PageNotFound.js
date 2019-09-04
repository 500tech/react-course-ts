import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export function PageNotFound({ location }) {
  const [ttr, setTTR] = useState(3);
  useEffect(() => {
    const tid = setTimeout(() => setTTR(ttr - 1), 1000);
    return () => clearTimeout(tid);
  }, [ttr]);
  if (ttr === 0) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <p>
        Page <code>{location.pathname}</code> not found
      </p>
      <p>Redirecting in {ttr}...</p>
    </div>
  );
}
