import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "./RouterProvider";

const AddressBar = styled.input`
  width: 80%;
  font-size: 24px;
`;

export const NavigationBar = () => {
  const { location, history } = useRouter();
  const { pathname } = location;
  const [url, setUrl] = useState(pathname);
  useEffect(() => {
    setUrl(pathname);
  }, [pathname]);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    history.push(url);
  }
  function back() {
    history.goBack();
  }
  return (
    <form onSubmit={submit}>
      <button type="button" onClick={back}>
        Back
      </button>
      <AddressBar value={url} onChange={e => setUrl(e.target.value)} />
    </form>
  );
};
