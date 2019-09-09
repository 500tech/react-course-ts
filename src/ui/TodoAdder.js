import React, { useState } from 'react';
import { NOOP } from 'utils';

export function TodoAdder({ onAddTodo = NOOP }) {
  const [text, setText] = useState('');
  function submit(e) {
    e.preventDefault();
    if (text) {
      onAddTodo(text);
      setText('');
    }
  }
  return (
    <form onSubmit={submit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
