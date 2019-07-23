import React from 'react';
import { shallow } from 'enzyme';
import Home from 'routes/Home';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('Home route', () => {
  let store = {};
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      firebase: {
        auth: {
          uid: 'asdfasfd'
        }
      },
      firestore: {
        data: {
          Goals: {}
        }
      }
    });
  });

  it('render Home component', () => {
    const wrapper = shallow(<Home store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
