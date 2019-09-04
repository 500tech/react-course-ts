import merge from 'lodash.merge';

const BASE_THEME = {
  palette: {
    bgColor: 'white',
    textColor: 'black',
    primary: 'blue',
    primaryText: 'white',
    active: 'rgba(0, 255, 0, 0.2)',
    error: 'rgba(255, 0, 0, 0.2)',
    errorText: 'darkred',
  },
};

function createTheme(overrides = {}, baseTheme = BASE_THEME) {
  return merge({}, baseTheme, overrides);
}

export const lightTheme = createTheme();

export const darkTheme = createTheme({
  palette: {
    bgColor: '#444444',
    textColor: 'white',
    primary: 'orange',
    active: 'rgba(0, 0, 255, 0.2)',
    error: 'rgba(255, 0, 0, 0.2)',
    errorText: 'darkred',
  },
});

export const myTheme = createTheme(
  {
    palette: {
      primary: 'red',
    },
  },
  darkTheme
);
