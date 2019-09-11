import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { useTheme } from 'services/theme';

export function ThemeProvider({ children }) {
  const { theme } = useTheme();
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
