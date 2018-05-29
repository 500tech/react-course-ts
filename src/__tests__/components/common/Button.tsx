import * as React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../../../components/common/Button';
import { noop } from 'lodash';


describe('<Button />', () => {
  test('should render hello world', () => {
    const component = shallow(
        <Button onClick={ noop }>Hello World</Button>
    );

    expect(component).toMatchSnapshot();
  });

  test('should fire on click when clicking on the button', () => {
    const spy = jest.fn();
    const component = shallow(
        <Button onClick={ spy }>Hello World</Button>
    );

    expect(spy).not.toHaveBeenCalled();

    component.simulate('click');

    expect(spy).toHaveBeenCalled();

  });
});


