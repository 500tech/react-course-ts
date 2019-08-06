import { useContext } from 'react';
import { ThemeNameContext } from 'providers/Theme';

export function useThemeService() {
  return useContext(ThemeNameContext);
}
