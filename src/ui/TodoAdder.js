import React, { useState } from 'react';

export function TodoAdder() {
  const [draft, setDraft] = useState('');
  function submit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={draft}
        onChange={e => setDraft(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
