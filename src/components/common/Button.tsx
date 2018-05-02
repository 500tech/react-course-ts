import * as React from 'react';

interface ComponentProps {
  children: any,
  onClick: () => void
}

const Button = (props: ComponentProps) => (
  <div className="button" onClick={props.onClick}>{props.children}</div>
);

export default Button;
