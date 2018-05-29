import * as React from 'react';
import { shallow } from 'enzyme';

import { noop } from 'lodash';
import Input from "../../../components/common/Input";


describe('<Input />', () => {
  test('should render', () => {
    const component = shallow(
        <Input value="test" onChange={ noop } />
    );

    expect(component).toMatchSnapshot();
  });

  test('should call onChange when value changes', () => {
    const spy = jest.fn();
    const component = shallow(
        <Input value="test" onChange={ spy } />
    );

    expect(spy).not.toHaveBeenCalled();
    const event = { target: { value: 'John'} };
    component.simulate('change', event);

    expect(spy).toHaveBeenCalledWith(event);
  });
});


