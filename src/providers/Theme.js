import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import * as themes from 'theme';

function mapStateToProps(state) {
  return {
    themeName: state.theme,
  };
}

const connector = connect(mapStateToProps);

export const Theme = connector(({ children, themeName }) => {
  return <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider>;
});
