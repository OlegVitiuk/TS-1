import React from 'react';
import { shallow } from 'enzyme';
import SignIn from 'routes/SignIn';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('Sign route', () => {
  let store = {};
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      auth: {
        authError: 'asdfasfd'
      },
      firebase: {
        auth: {
          uuid: 'dff'
        }
      }
    });
  });

  it('render SignIn component', () => {
    const wrapper = shallow(<SignIn store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
