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
