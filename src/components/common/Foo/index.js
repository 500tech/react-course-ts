import { connect } from 'react-redux';
import { Foo as BaseFoo } from './Foo';

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

const withFooConnector = connect(mapStateToProps);

export const Foo = withFooConnector(BaseFoo);
