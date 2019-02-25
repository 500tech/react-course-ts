import React, { useState, useRef, useEffect, useCallback } from 'react';

function useFocus(shouldFocus) {
  const ref = useRef(null);
  useEffect(() => {
    if (shouldFocus) {
      ref.current.focus();
    }
  }, []);
  return ref;
}

export function AddTodo({ onAddTodo, focus = true }) {
  const [draft, setDraft] = useState('');
  const focusRef = useFocus(focus);
  const addTodo = useCallback(
    () => {
      onAddTodo(draft);
      setDraft('');
    },
    [draft, setDraft, onAddTodo]
  );
  const onDraftChange = event => setDraft(event.target.value);
  const onKeyPress = ({ key }) => {
    if (key.toLowerCase() === 'enter' && draft) {
      addTodo();
    }
  };
  return (
    <div>
      <input
        ref={focusRef}
        value={draft}
        onChange={onDraftChange}
        onKeyPress={onKeyPress}
        data-testid="input"
      />
      <button disabled={draft === ''} onClick={addTodo} data-testid="adder">
        Add Me!
      </button>
    </div>
  );
}
