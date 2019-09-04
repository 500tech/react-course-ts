import React from 'react';
import { render as _render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { lightTheme } from 'themes';

export function render(component) {
  return _render(
    <MemoryRouter>
      <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>
    </MemoryRouter>
  );
}
