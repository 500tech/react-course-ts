import gql from "graphql-tag";
import {executeQuery} from "../../utils/api";
import {print} from "graphql/language/printer";

describe('Utils: API', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json() {
        return { data: 'fake-data' };
      }
    });
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  test('fetch data from server', async () => {
    const variables = { id: 2 };
    const query = gql`
      query myQuery {
          test {
              whatever
          }
      }
    `;

    const result = await executeQuery(query, variables);

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3004/graphql', {
      body: JSON.stringify({ query: print(query), variables }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    });

    expect(result.data).toEqual('fake-data')
  });
});
