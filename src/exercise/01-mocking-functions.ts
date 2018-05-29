interface User {
  isAdmin: boolean
}

const users = {
  'joe': { isAdmin: true },
  'james': { isAdmin: false },
  'jimmy': { isAdmin: false }
};

function getUserPermissions(userName: string, callback) {
  const user: User = users[userName];

  if (!user) {
    callback({ error: 'Users does not exist', errorCode: 12 });
    return;
  }

  if (user.isAdmin) {
    callback('edit');
    return;
  }

  callback('read')
}


export default getUserPermissions;
