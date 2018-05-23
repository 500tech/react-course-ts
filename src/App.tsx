import * as React from 'react';
import {Provider} from 'react-redux';
import User from './components/User';
import store from './redux/store';


const App = () => (
  <Provider store={store}>
    <User />
  </Provider>
);

export default App;
