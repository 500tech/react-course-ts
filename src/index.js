import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
<div id="root">
  <div class="app-container">
    <header>
      <h1>Foobar</h1>
    </header>
    <main>
      <h1 class="greeting">Hello, stranger!</h1>
    </main>
  </div>
</div>
 */

function Container({ children }) {
  return <div className="app-container">{children}</div>;
}

function Header({ title = 'My awesome default title' }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

function Greeting({ name = 'stranger' }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}

function App() {
  return (
    <Container>
      <Header title="Foobar" />
      <main>
        <Greeting />
      </main>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
