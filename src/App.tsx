import * as React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from './components/Home';

const App = () => (
  <Router>
    <Route exact path="/movies">
      <Route path="/movies/:id" component={Home} />
    </Route>
  </Router>
);

export default App;
