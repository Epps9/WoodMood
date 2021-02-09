import React from 'react';
import { shallow } from 'enzyme';
import { PromoProductComponent } from './PromoProduct';

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromoProductComponent />);
    expect(component).toBeTruthy();
  });
});
