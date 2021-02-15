import React from 'react';
import { shallow } from 'enzyme';
import { ProductViewComponent } from './WatchView';

describe('Component ProductView', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductViewComponent />);
    expect(component).toBeTruthy();
  });
});
