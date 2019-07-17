import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '.';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toEqual(1);
});
