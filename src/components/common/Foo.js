import React, { memo } from 'react';
import styled from 'styled-components';

// function pstyled(Component) {
//   return (rawCss) => {
//     return props => {
//       const css = cssFactory(rawCss, props);
//       const className = genrateNewClassNameFromCSS(css);
//       return React.createElement(Component, {
//         ...props,
//         className: `${className} ${props.className}`,
//       }, props.children);
//     }
//   };
// }

const BaseFoo = memo(({ className }) => <p className={className}>Foo</p>);

export const Foo = styled(BaseFoo)`
  color: red;

  &:hover {
    opacity: 0.5;
  }
`;
