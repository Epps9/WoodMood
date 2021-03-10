import React from 'react';
import { shallow } from 'enzyme';
import { CartBoxProductComponent } from './CartBoxProduct';

describe('Component CartBoxProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartBoxProductComponent />);
    expect(component).toBeTruthy();
  });
});
