import * as React from 'react';
import {connect} from 'react-redux';
import {logout} from '../redux/actions/auth-actions';

const User = (props) => (
  <div>
    <button onClick={props.foo} />
    hello {props.email}
  </div>
);

const mapStateToProps = (state) => ({
  email: state.email
});

const mapDispatchToProps = (dispatch) => ({
  foo: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
