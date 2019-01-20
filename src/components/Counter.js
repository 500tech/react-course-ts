import React, { Component } from 'react';
import styled from 'styled-components';

const prop = propName => props => props[propName];

const ColouredTitle = styled.h1`
  color: ${prop('colour')};
`;

export class Counter extends Component {
  render() {
    return (
      <ColouredTitle className={this.props.className} colour="blue">
        {this.props.count}
      </ColouredTitle>
    );
  }
}
