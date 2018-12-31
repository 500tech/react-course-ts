import React from 'react';
import styled from 'styled-components';

const ErrorTitle = styled.h1`
  color: red;
`;
export default function ErrorPage() {
  return <ErrorTitle>Page not found :(</ErrorTitle>;
}
