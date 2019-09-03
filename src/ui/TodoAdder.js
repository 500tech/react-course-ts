import React, { useState, useEffect, useRef } from 'react';
import { NOOP } from 'utils';

export function TodoAdder({ onAddTodo = NOOP }) {
  const [draft, setDraft] = useState('');
  const inputRef = useRef();
  function submit(e) {
    e.preventDefault();
    if (draft) {
      onAddTodo(draft);
      setDraft('');
    }
  }
  useEffect(() => {
    const input = inputRef.current;
    input.focus();
  }, []);
  return (
    <form onSubmit={submit}>
      <input
        ref={inputRef}
        type="text"
        value={draft}
        onChange={e => setDraft(e.target.value)}
      />
      <button disabled={!draft}>Add</button>
    </form>
  );
}
