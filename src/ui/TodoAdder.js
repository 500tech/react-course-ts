import React, { useState } from 'react';
import { NOOP } from 'utils';

export function TodoAdder({ onAddTodo = NOOP }) {
  const [draft, setDraft] = useState('');
  function submit(e) {
    e.preventDefault();
    if (draft) {
      onAddTodo(draft);
      setDraft('');
    }
  }
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={draft}
        onChange={e => setDraft(e.target.value)}
      />
      <button disabled={!draft}>Add</button>
    </form>
  );
}
