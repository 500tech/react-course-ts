import { useState } from 'react';
import { darkTheme, lightTheme } from 'themes';

export function useTheme() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () =>
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  return { theme, toggleTheme };
}
