import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function BaseAddressBar({ location, history }) {
  const [url, setUrl] = useState(location.pathname);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);
  function submit(e) {
    e.preventDefault();
    history.push(url);
  }
  return (
    <form onSubmit={submit}>
      <button type="button" onClick={() => history.goBack()}>
        Back
      </button>
      <input value={url} onChange={e => setUrl(e.target.value)} />
      <button type="button" onClick={() => history.goForward()}>
        Forward
      </button>
    </form>
  );
}

export const AddressBar = withRouter(BaseAddressBar);
