import * as React from 'react';

const Welcome = ({ history }) => (
  <div>
    <div className="welcome-container">
      welcome to MyTasks.
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      <div className="button" onClick={() => history.push('/tasks')}>start now</div>
    </div>
  </div>
);

export default Welcome;
