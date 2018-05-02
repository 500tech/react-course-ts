import * as React from 'react';

interface ComponentProps {
  value: string,
  onChange: (e) => void
}

const Input = (props: ComponentProps) => (
  <input
    type="text"
    value={props.value}
    placeholder="new movie"
    onChange={props.onChange} />
);

export default Input;
