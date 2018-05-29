import * as React from 'react';
import { TranslateAsChild, TranslateAsProp } from "../../components/localization";
import {mount} from "enzyme";

jest.mock('react-intl');

describe('<TranslateAsChild/>', () => {
  test('should render', () => {
    const component = mount(
        <TranslateAsChild />
    );

    expect(component).toMatchSnapshot();
  });
});

describe('<TranslateAsProp', () => {
  test('should render', () => {
    const component = mount(
        <TranslateAsProp />
    );

    expect(component.find('div')).toHaveProp('data-test-id', 'fake.id');
  })
});


