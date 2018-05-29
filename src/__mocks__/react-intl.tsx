import * as React from "react";

const intl = {
  formatMessage: ({ id }) => id
};

export const FormattedMessage = ({ id }) => <span>{ id }</span>;
export const injectIntl = (ComposedComponent) => () => <ComposedComponent intl={ intl } />;



