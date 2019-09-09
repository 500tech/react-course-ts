import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BorderedContainer({ children }) {
  return <div className="main-container">{children}</div>;
}

function Title({ color, children }) {
  return <h1 style={{ color }}>{children}</h1>;
}

function App({ color = 'blue', children }) {
  return (
    <BorderedContainer>
      <Title color={color}>Hello, world!</Title>
      {children ? <p>{children}</p> : null}
      {children && <p>{children}</p>}
    </BorderedContainer>
  );
}

ReactDOM.render(<App>Yo yo!</App>, document.getElementById('root'));

// React.createElement('div', null, [
//   React.createElement('h1', { style: { color: 'blue' } }, [
//     'Hello, world!',
//     0 ? 1 : 2
//   ]),
//   React.createElement('p', null, ['Yo yo']),
// ]);
