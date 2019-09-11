import { useThemeContext } from 'providers/theme';

export function useTheme() {
  const { theme, toggleTheme } = useThemeContext();
  return { theme, toggleTheme };
}
