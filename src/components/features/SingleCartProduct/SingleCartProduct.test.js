import React from 'react';
import { shallow } from 'enzyme';
import { SingleCartProductComponent } from './SingleCartProduct';

describe('Component SingleCartProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<SingleCartProductComponent />);
    expect(component).toBeTruthy();
  });
});
