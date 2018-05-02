import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Header = (props) => (
  React.createElement('h1', null, props.title)
);

ReactDOM.render(
  React.createElement('div', null, [
    React.createElement('h2', null, 'welcome to'),
    React.createElement(Header, {title: 'React - basic to advanced course'})
  ]),
  document.getElementById('root')
);

registerServiceWorker();
