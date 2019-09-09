import React from 'react';
import { NOOP } from 'utils';

export function BorderedContainer({ children }) {
  return <div className="main-container">{children}</div>;
}

export function Title({ color, children, onChangeColor = NOOP }) {
  return (
    <h1 style={{ color, userSelect: 'none' }} onClick={onChangeColor}>
      {children}
    </h1>
  );
}
