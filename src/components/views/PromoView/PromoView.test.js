import React from 'react';
import { shallow } from 'enzyme';
import { PromoViewComponent } from './PromoView';

describe('Component PromoView', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromoViewComponent />);
    expect(component).toBeTruthy();
  });
});
