import { fetchDataCallback, fetchDataPromise } from '../../exercise/02-async-tests'

test('fetchData Callback', (done) => {
  const apiSpy = jest.fn();
  const options = { url: '/users', method: 'GET' };

  expect.assertions(1);

  fetchDataCallback(apiSpy, options, () => {
    expect(apiSpy).toHaveBeenCalled();
    done();
  })
});


test('fetchData Promise', () => {
  const apiSpy = jest.fn();
  const options = { url: '/users', method: 'GET' };

  expect.assertions(1);

  return fetchDataPromise(apiSpy, options).then(() => {
    expect(apiSpy).toHaveBeenCalled();
  });
});

test('fetchData Async', async () => {
  const apiSpy = jest.fn();
  const options = { url: '/users', method: 'GET' };

  expect.assertions(1);

  await fetchDataPromise(apiSpy, options);

  expect(apiSpy).toHaveBeenCalled();
});
