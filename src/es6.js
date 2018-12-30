/**
 * Let's get going on some vanilla JS features.
 * Some of these are new, but some have been with us since the early 2010s
 *
 * @TOKNOW promises, async-await
 */

async function varLetConst() {
  var promises = [];
  for (var i = 0; i < 5; i++) {
    promises.push(
      // eslint-disable-next-line
      new Promise(function(resolve) {
        setTimeout(function() {
          resolve(i);
        }, 0);
      })
    );
  }
  var values = await Promise.all(promises);
  return (
    values.reduce(function(sum, value) {
      return sum + value;
    }) === 10
  ); // 0 + 1 + 2 + 3 + 4 + 5
}

function generateNRandomNumbers(n, max) {
  const numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(Math.round(max * Math.random()));
  }
  return numbers;
}

function filterMapReduce() {
  const samples = generateNRandomNumbers(4, 10).concat(
    generateNRandomNumbers(3, 5)
  );
  const samplesOver5 = samples;
  const squaresOfSamplesOver5 = samplesOver5;
  return !squaresOfSamplesOver5.find(function(item) {
    return item < 25;
  });
}

// Hint: use destructuring for more readable code :)
function generateCompanyEmail(userObject) {}

// Use arrow functions and class syntax to make this work
function getUserFoo() {
  function User(username) {
    this.username = username;
  }
  User.prototype.fetchUser = function() {
    return new Promise(function(resolve) {
      resolve({
        username: this && this.username,
      });
    });
  };
  const { fetchUser } = new User('foo');
  return fetchUser();
}

function shallowClone(object) {
  if (Array.isArray) {
    return object;
  }
  return object;
}

export default async function runAll() {
  (await varLetConst()) || console.log('FAIL!');
  filterMapReduce() || console.log('FAIL!');
  generateCompanyEmail({
    fullName: 'Scott R. Mellow',
    company: 'foobar',
  }) === 'Scott@foobar.com' || console.log('FAIL!');
  (await getUserFoo()).username === 'foo' || console.log('FAIL!');
  const arr = [1];
  const cloneOfArr = shallowClone(arr);
  arr[0] === cloneOfArr[0] || console.log('FAIL!');
  cloneOfArr.pop();
  arr[0] !== cloneOfArr[0] || console.log('FAIL!');
  const user = { username: 'foo' };
  const cloneOfUser = shallowClone(user);
  user.username === cloneOfUser.username || console.log('FAIL!');
  cloneOfUser.username = 'bar';
  user.username !== cloneOfUser.username || console.log('FAIL!');
}
