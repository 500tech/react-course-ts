import * as React from 'react';

const Button = ({ onClick, children }) => (
  <div className="button" onClick={onClick}>{children}</div>
);

export default Button;
