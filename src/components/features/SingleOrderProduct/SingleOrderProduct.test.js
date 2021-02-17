import React from 'react';
import { shallow } from 'enzyme';
import { SingleOrderProductComponent } from './SingleOrderProduct';

describe('Component SingleOrderProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<SingleOrderProductComponent />);
    expect(component).toBeTruthy();
  });
});
