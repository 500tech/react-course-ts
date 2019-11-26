import React from 'react';

export const Title = ({ color='blue', children }) => (
  <h1 style={{ color, fontWeight: 'bold' }}>{children}</h1>
);
