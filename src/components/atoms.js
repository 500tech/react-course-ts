import React from 'react';
import styled from 'styled-components';

export const Button = styled.button.attrs({ type: 'button' })`
  &:disabled {
    background-color: transparent;
    border: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.primaryText};
`;

export const Input = styled.input.attrs({ type: 'text' })`
  &:active {
    outline-color: green;
  }
`;

export const AlertBox = styled.div`
  background-color: red;
  padding: 10px;
  border-radius: 5px;
  border: 1px dotted violet;
  font-size: 1.5em;

  &:hover {
    visibility: hidden;
  }

  p {
    pointer-events: none;
    user-select: none;
  }
`;

export function NoItemsEmptyState() {
  return (
    <AlertBox>
      <p>Oh noes, no items yet! Please create one :)</p>
    </AlertBox>
  );
}
