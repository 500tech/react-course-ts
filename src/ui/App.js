import React from 'react';
import { BorderedContainer } from 'ui/common';
import { Header } from 'ui/Header';
import { MainView } from 'views/Main';

export function App() {
  return (
    <BorderedContainer>
      <Header />
      <MainView />
    </BorderedContainer>
  );
}
