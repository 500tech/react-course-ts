import React from 'react';
import { render } from 'react-dom';

function Title({ children }) {
  return (
    <h1 style={{ background: 'red' }}>
      {children}
      <p>{children}</p>
    </h1>
  );
}

render(
  <div>
    <Title>
      <hr />
      <span>Foo</span>
    </Title>
  </div>,
  document.getElementById('root')
);
