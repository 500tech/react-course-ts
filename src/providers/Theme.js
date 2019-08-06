import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as themes from 'theme';

const [initialThemeName] = Object.keys(themes);

export const ThemeNameContext = createContext();

export function Theme({ children }) {
  const [themeName, setThemeName] = useState(initialThemeName);
  const ctx = [themeName, setThemeName];
  return (
    <ThemeProvider theme={themes[themeName]}>
      <ThemeNameContext.Provider value={ctx}>
        {children}
      </ThemeNameContext.Provider>
    </ThemeProvider>
  );
}
