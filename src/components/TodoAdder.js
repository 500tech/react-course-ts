import React, { useState, useRef, useEffect } from 'react';
import { NOOP } from '../utils';

export function TodoAdder({ onAddTodo = NOOP }) {
  const [draft, setDraft] = useState('');
  const inputRef = useRef();
  useEffect(() => {
    const tid = setTimeout(() => console.log('No input for a while...'), 3000);
    return () => clearTimeout(tid);
  }, [draft]);
  useEffect(() => {
    const actualInputNode = inputRef.current;
    actualInputNode.focus();
  }, []);
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        value={draft}
        onChange={event => setDraft(event.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(draft);
          setDraft('');
        }}
        disabled={!draft}
      >
        Add Todo
      </button>
    </>
  );
}
