import * as React from 'react';

const withTestId = (ComposedComponent, id) => {
  return (props) => (
      <div data-test-id={ id }>
        <ComposedComponent {...props} />
      </div>
  )
};

export default withTestId;
