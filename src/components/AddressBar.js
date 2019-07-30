import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Button } from './atoms';

const HorizontalForm = styled.form`
  display: flex;
`;

function useDerivedState(value) {
  const [state, setState] = useState(value);
  useEffect(() => {
    setState(value);
  }, [value]);
  return [state, setState];
}

function BaseAdresssBar({ history, location }) {
  const [url, setUrl] = useDerivedState(location.pathname);
  const go = e => {
    e.preventDefault();
    history.push(url);
  };
  return (
    <HorizontalForm onSubmit={go}>
      <Button onClick={history.goBack}>Back</Button>
      <input value={url} onChange={e => setUrl(e.target.value)} />
      <Button onClick={history.goForward}>Forward</Button>
    </HorizontalForm>
  );
}

export const AddressBar = withRouter(BaseAdresssBar);
