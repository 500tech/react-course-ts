import * as React from 'react';

const Input = ({ onChange, value }) => (
  <input type="text" value={value} placeholder="new movie" onChange={onChange} />
);

export default Input;
