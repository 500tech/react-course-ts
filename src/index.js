import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

// title can be a string (and, therefore, the actual title), or it can use
// the children prop, but not both!
function Header({ title, children }) {
  if (children && title) {
    console.error(
      "'Header' component can't use both 'title' and 'children' props!"
    );
    // don't render anything
    return null;
  }
  return <header>{title ? <h1>{title}</h1> : children}</header>;
}

function AppContainer({ children }) {
  return <div className="app-container">{children}</div>;
}

/**
 * @TODO if user exists, greet him/her (use Greeting)
 * otherwise, just render children
 */
function App({ children }) {
  return (
    <AppContainer>
      <Header title="foobar" />
      <main>
        <Greeting />
        {children}
      </main>
    </AppContainer>
  );
}

/**
 * interface User {
 *   name: string;
 * }
 */
const user = null;

ReactDOM.render(<App user={user} />, document.getElementById('root'));
