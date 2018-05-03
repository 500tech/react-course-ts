import * as React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className="card">
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <div className="btn" key={num}>{num}</div>
              ))
            }
            <div className="btn">+</div>
            <div className="btn">-</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
