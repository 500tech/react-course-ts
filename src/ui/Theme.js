import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import * as themes from 'themes';

export function Theme({ children }) {
  const themeName = useSelector(state => state.theme);
  return <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>;
}
