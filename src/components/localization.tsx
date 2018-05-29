import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

export const TranslateAsChild = () => (
    <FormattedMessage id="fake.id" />
);

export const TranslateAsProp = injectIntl(({ intl }) => (
    <div data-test-id={ intl.formatMessage({ id:'fake.id' }) }>Hello world</div>
));
