import React from 'react';

export function Home({ onGreetingClick }) {
  return (
    <div>
      <h1 onClick={onGreetingClick}>
        Greetings! This is HOME
      </h1>
    </div>
  );
}
