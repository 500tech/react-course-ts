import { useSelector, useDispatch } from 'react-redux';
import * as themes from 'themes';

export function useTheme() {
  const themeName = useSelector(state => state.theme);
  const theme = themes[themeName];
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch({
      type: 'SET_THEME',
      payload: themeName === 'lightTheme' ? 'darkTheme' : 'lightTheme',
    });
  };
  return { theme, toggleTheme };
}

// function useDispatch() {
//   const store = useContext(StoreContext);
//   return store.dispatch;
// }

// function useSelector(selector) {
//   const store = useContext(StoreContext);
//   const [state, setState] = useState(selector(store.getState()));
//   useEffect(() => {
//     return store.subscribe(() => {
//       setState(selector(store.getState()));
//     });
//   }, [store, selector]);
//   return state;
// }
