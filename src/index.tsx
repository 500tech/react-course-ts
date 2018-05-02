import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Header = () => (
  React.createElement('h1', null, 'react and course')
);

ReactDOM.render(
  React.createElement('div', null, [
    React.createElement('h2', null, 'welcome to'),
    React.createElement(Header)
  ]),
  document.getElementById('root')
);

registerServiceWorker();
