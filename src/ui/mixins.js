import { css } from 'styled-components';

export const clickable = css`
  &:not([disabled]) {
    cursor: pointer;
  }
`;