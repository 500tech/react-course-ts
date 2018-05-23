import * as React from 'react';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import store from './redux/store';

const Header = () => (
  <h1>hello</h1>
);
const mapStateToProps = (state) => ({
  state
});

const Enhanced = connect(mapStateToProps)(Header);

class App extends React.Component {
  componentDidMount() {
    store.dispatch({type: 'hello'});
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Enhanced />
        </div>
      </Provider>
    );
  }
}

export default App;
