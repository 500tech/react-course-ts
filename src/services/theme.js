import { useSelector, useDispatch } from 'react-redux';
import { SET_THEME } from 'state/actions';

export function useThemeService() {
  const themeName = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    const newTheme = themeName === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    const setThemeAction = {
      type: SET_THEME,
      payload: newTheme,
    };
    return dispatch(setThemeAction);
  };
  return {
    themeName,
    toggleTheme,
  };
}
