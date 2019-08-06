import { useSelector } from 'react-redux';

export function useLoadingIndication(group) {
  return useSelector(state =>
    group
      ? !!state.net[group]
      : Object.values(state.net).some(active => active > 0)
  );
}
