import SignIn from '.';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { stub } from 'sinon';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';

const mockStore = configureMockStore([thunk]);

describe('SignIn component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it('should render the сontainer component', () => {
    const wrapper = shallow(<SignIn store={store} />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
