import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'themes';

const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () =>
    setTheme(theme === lightTheme ? darkTheme : lightTheme);

  const ctx = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={ctx}>
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
}
