import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function BaseAddressBar({ location, history }) {
  const [url, setUrl] = useState(location.pathname);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);
  function submit(e) {
    e.preventDefault();
    if (url) {
      history.push(url);
    }
  }
  return (
    <form onSubmit={submit}>
      <button type="button" onClick={() => history.goBack()}>
        Back
      </button>
      <input type="text" onChange={e => setUrl(e.target.value)} value={url} />
      <button type="button" onClick={() => history.goForward()}>
        Forward
      </button>
    </form>
  );
}

export const AddressBar = withRouter(BaseAddressBar);
