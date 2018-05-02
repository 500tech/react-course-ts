import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const list = [
  "Avatar",
  "Wonder Women",
  "Titanic"
];

const Header = ({title}) => <h1>{title}</h1>;

const Movie = ({label}) => <li>{label}</li>;

const Movies = () => (
  <ul>
    {list.map(movie => <Movie label={movie} key={movie} />)}
  </ul>
);

const App = () => (
  <div>
    <Header title="my favorite movies" />
    <Movies />
  </div>
);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
