import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Header = ({ title }) => <h1>{title}</h1>;

const App = () => (
  <div>
    <h2>welcome to</h2>
    <Header title="react course - basic to advanced" />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
