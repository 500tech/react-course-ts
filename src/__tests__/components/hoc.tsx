import * as React from 'react';
import withTestId from '../../components/hoc';
import {mount} from "enzyme";

describe('HOC: withTestId', () => {
  test('should render component with test id wrapper', () => {
    const TestComponent = () => <div>Test</div>;
    const WrappedComponent = withTestId(TestComponent, 'my-id');

    const component = mount(
        <WrappedComponent />
    );

    expect(component).toMatchSnapshot();
  });
});
