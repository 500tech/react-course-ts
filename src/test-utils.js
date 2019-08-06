import React from 'react';
import { render as _render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'theme';

function Wrapper({ children }) {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </Router>
  );
}

export function render(element) {
  return _render(element, {
    wrapper: Wrapper,
  });
}
