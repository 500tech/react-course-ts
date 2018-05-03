import * as React from 'react';

const Button = ({ children, onClick }) => (
  <div className="button" onClick={onClick}>
    {children}
  </div>
);

export default Button;
