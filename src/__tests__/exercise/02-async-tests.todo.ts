// import { fetchDataCallback, fetchDataPromise } from '../02-async-tests'

/*
  create a test that checks fetchDataCallback and fetchDataPromise and make sure you wait until
  the async code finished to run before finishing the test.

  There are 3 ways to do it:

  1. fetchDataCallback should be checked using the done callback, which can be activated when you know
  the test should be finished.

  2. fetchDataPromise should be checked in 2 different tests, one using Promises and the other using async/await

  For more information on async tests see:
  https://facebook.github.io/jest/docs/en/asynchronous.html

  Also note that you can tell jest the number of expectations the test will run to ensure that we do not have any
  false positives. Please see the expect documentation for more details:

  https://facebook.github.io/jest/docs/en/expect.html
 */

test('fetchDataCallback returns data');

test('fetchDataPromise returns data');

test('fetchDataPromise returns data');
