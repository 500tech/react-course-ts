import React from 'react';
import { render as baseRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { lightTheme } from 'themes';

export function render(component) {
  return baseRender(
    <MemoryRouter>
      <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>
    </MemoryRouter>
  );
}
