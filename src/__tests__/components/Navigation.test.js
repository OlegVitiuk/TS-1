import { shallow, mount } from 'enzyme';
import React from 'react';
import Navigation from 'components/Navigation';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { findByTestAttribute } from 'utils';

const mockStore = configureMockStore([thunk]);

describe('Navigation component', () => {
  let store = {};
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      firebase: {
        auth: {
          id: 'asdfasfd'
        },
        profile: {
          initials: 'dddd'
        }
      }
    });

    wrapper = shallow(<Navigation store={store} />);
  });

  it('should render Navigation', () => {
    expect(findByTestAttribute(wrapper, 'navigation')).toBeDefined();
  });

  it('handle click changes route', () => {
    const spy = jest.fn();

    wrapper = shallow(<Navigation store={store} />);

    const menu = findByTestAttribute(wrapper, 'menu');

    const changeRoute = jest.spyOn(menu.prototype, 'handleClick');
    const event = {
      key: 'home'
    };

    menu.simulate('onClick', event);

    expect(changeRoute).toHaveBeenCalled();
  });
});
