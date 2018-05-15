import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// pages
import Tasks from './Tasks';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/tasks" component={Tasks} />
        </div>
      </Router>
    );
  }
}

export default App;
