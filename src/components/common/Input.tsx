import * as React from 'react';

const Input = (props) => (
  <input
    ref={props.onRef}
    type="text"
    placeholder="something"
  />
);

export default Input;
