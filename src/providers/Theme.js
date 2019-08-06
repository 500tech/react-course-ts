import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeService } from 'services/theme';
import * as themes from 'theme';

export function Theme({ children }) {
  const { themeName } = useThemeService();
  return <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>;
}
