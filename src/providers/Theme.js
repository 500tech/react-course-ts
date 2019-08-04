import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withThemeName } from 'providers/ThemeName';
import * as themes from 'theme';

export const Theme = withThemeName(({ children, themeName }) => {
  return <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>;
});
