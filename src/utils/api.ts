import { print } from 'graphql/language/printer';

export function executeQuery(query: string, variables?: object) {
  return fetch('http://localhost:3004/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: print(query), variables })
  }).then(response => response.json());
}
