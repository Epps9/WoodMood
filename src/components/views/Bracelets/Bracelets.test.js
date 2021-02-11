import React from 'react';
import { shallow } from 'enzyme';
import { BraceletsComponent } from './Bracelets';

describe('Component Bracelets', () => {
  it('should render without crashing', () => {
    const component = shallow(<BraceletsComponent />);
    expect(component).toBeTruthy();
  });
});
