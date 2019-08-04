import { connect } from 'react-redux';
import { SET_THEME } from 'state/actions';
import { TopSection as Base } from './TopSection';

function mapStateToProps(state) {
  return {
    themeName: state.theme,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setThemeName(themeName) {
      return dispatch({ type: SET_THEME, payload: themeName });
    },
  };
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const TopSection = connector(Base);
