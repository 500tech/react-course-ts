import { isCurrentUserAdmin } from '../../exercise/03-mocking-modules';

jest.mock('../../exercise/external-api', () => {
  return {
    getCurrentUser() {
      return {
        username: 'bob',
        isAdmin: false
      }
    }
  };
});

test('mocking current user', () => {
  expect(isCurrentUserAdmin()).toBe(false);
});
