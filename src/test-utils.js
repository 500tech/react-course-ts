import React from 'react';
import { render as _render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { facebook } from 'theme';

export function render(component) {
  return _render(component, {
    wrapper({ children }) {
      return (
        <Router>
          <ThemeProvider theme={facebook}>{children}</ThemeProvider>
        </Router>
      );
    },
  });
}
