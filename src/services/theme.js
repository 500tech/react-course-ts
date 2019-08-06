import { useContext } from 'react';
import { ThemeNameContext } from 'providers/Theme';

export function useThemeService() {
  const [themeName, setThemeName] = useContext(ThemeNameContext);
  const toggleTheme = () =>
    setThemeName(themeName === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  return {
    themeName,
    toggleTheme,
  };
}
