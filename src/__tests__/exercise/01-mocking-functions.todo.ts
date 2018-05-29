// import getUserPermissions from '../01-mocking-functions';

/*
  Create a test that checks the getUserPermissions function.
  The test should cover 3 cases:

  1. When a user is not in the list of users we should get an error object with a message.
  Note that we do not want to fail the test if the message changes or additional properties are added to the object
  like error code.

  2. When a user is in the list and is an admin user we should get an edit permission

  3. When a user is in the list and is not an admin we should get the read permission

  In order to check the calls you will need to create a mock function (also known as a spy)
  Please see: https://facebook.github.io/jest/docs/en/mock-functions.html

  To check that the mock function have been called you should use the provided matchers given by jest.
  To review the existing matchers you can look at the expect API:
  https://facebook.github.io/jest/docs/en/expect.html

  In the expect API you should also find ways to test values partially or define that they can be of a certain type
  without using type of checks
 */

test('should get an error when user does not exist');
