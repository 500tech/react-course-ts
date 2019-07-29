import { merge } from 'lodash';

const baseTheme = {
  palette: {
    appBackground: 'white',
    itemColor: 'black',
  },
  breakpoints: {
    mobile: 375,
    tablet: 1024,
    laptop: 1440,
  },
};

function createTheme(theme) {
  return merge({}, baseTheme, theme);
}

export const redhat = createTheme({
  palette: {
    primary: 'red',
    primaryText: 'black',
    secondary: 'pink',
    secondaryText: 'white',
    itemColor: 'red',
  },
});

export const facebook = createTheme({
  palette: {
    primary: 'blue',
    primaryText: 'white',
    secondary: 'white',
    secondaryText: 'blue',
  },
});
