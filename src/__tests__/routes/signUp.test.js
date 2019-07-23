import React from 'react';
import { shallow } from 'enzyme';
import SignUp from 'routes/SignUp';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('SignUp route', () => {
  let store = {};

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

  it('render SignUp component', () => {
    const wrapper = shallow(<SignUp store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
