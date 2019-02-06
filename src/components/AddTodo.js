import React, { useRef, useEffect, useState } from 'react';

export function AddTodo({ onAddTodo }) {
  const [draft, setDraft] = useState('');
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  }, []);
  const onDraftChange = event => setDraft(event.target.value);
  const addTodo = () => {
    onAddTodo(draft);
    setDraft('');
  };
  return (
    <div>
      <input ref={input} value={draft} onChange={onDraftChange} />
      <button disabled={draft === ''} onClick={addTodo}>
        Add Me!
      </button>
    </div>
  );
}
