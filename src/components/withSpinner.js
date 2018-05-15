import * as React from 'react';

const Spinner = () => (
  <div className="spinner-holder">
    <svg className="spinner" viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
    </svg>
  </div>
);

const withSpinner = (Comp) => (
  (props) => (
    <div className="with-spinner">
      {props.loading && <Spinner />}
      <Comp {...props} />
    </div>
  )
);

export default withSpinner;
