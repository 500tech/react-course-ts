import styled from 'styled-components';

export const Button = styled.button.attrs({ type: 'button' })`
  &:disabled {
    background-color: transparent;
    border: none;
  }
`;

export const Input = styled.input.attrs({ type: 'text' })`
  &:active {
    outline-color: green;
  }
`;
