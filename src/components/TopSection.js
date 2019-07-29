import React from 'react';

export function TopSection({ username, greeting, setTheme, theme }) {
  return (
    <>
      <h1>
        <span>{username ? `${greeting}, ${username}` : greeting}</span>
      </h1>
      <select onChange={setTheme} value={theme}>
        <option value="redhat">Redhat</option>
        <option value="facebook">facebook</option>
      </select>
    </>
  );
}
