import { print } from 'graphql/language/printer';

export function executeQuery<T>(query: string, variables?: T) {
  return fetch('http://localhost:3004/graphql', {
    body: JSON.stringify({ query: print(query), variables }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  }).then((response) => response.json());
}

export default {
  executeQuery
};
