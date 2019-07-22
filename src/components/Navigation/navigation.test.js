import React from 'react';
import { shallow } from 'enzyme';
import App from '.';

describe('Navigation component', () => {
  it('render App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
