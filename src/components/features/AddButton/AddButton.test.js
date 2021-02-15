import React from 'react';
import { shallow } from 'enzyme';
import { AddButtonComponent } from './AddButton';

describe('Component AddButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<AddButtonComponent />);
    expect(component).toBeTruthy();
  });
});
