import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { App as BaseApp } from './App';
import { getTodos } from '../../state/actions/todos.actions';

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  getTodos,
};

// known issue with react-router
export const App = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BaseApp)
);
