import React, { createContext, Component } from 'react';
import * as themes from 'theme';

const themeNames = Object.keys(themes);
const ThemeNameContext = createContext();

export function withThemeName(Component) {
  return function WrappedWithThemeName(props) {
    return (
      <ThemeNameContext.Consumer>
        {ctx => {
          return <Component {...ctx} {...props} />;
        }}
      </ThemeNameContext.Consumer>
    );
  };
}

export class ThemeNameProvider extends Component {
  state = {
    themeName: themeNames[0],
  };

  setThemeName = themeName => this.setState({ themeName });

  render() {
    const { themeName } = this.state;
    const { setThemeName } = this;
    const ctx = { themeName, setThemeName };
    return (
      <ThemeNameContext.Provider value={ctx}>
        {this.props.children}
      </ThemeNameContext.Provider>
    );
  }
}
