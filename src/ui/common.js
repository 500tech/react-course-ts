import styled from 'styled-components';

export const BorderedContainer = styled.div`
  border: 1px solid black;

  &:hover {
    background-color: pink;
  }

  h1 {
    font-family: fantasy;
  }
`;

export const Title = styled.h1`
  user-select: none;
  color: ${props => props.color};
`;

// function styledx(Element) {
//   return function (strings, ...values) {
//     return function Component(props) {
//       const className = createClassName(strings, values.map(fn => fn(props)))
//       const filteredProps = getProperDOMProps(props)
//       return <Element className={className} {...filteredProps} />
//     }
//   }
  
// }

