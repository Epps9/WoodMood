import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Watch';

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComponent />);
    expect(component).toBeTruthy();
  });
});
