import { shallow } from 'enzyme';
import React from 'react';
import PaymentForm from 'components/PaymentForm';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const store = configureStore([thunk])();

let [pay] = new Array(1).fill(jest.fn());

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    pay,
    goalId: 'sdagdsg',
    goalName: 'asfdasf'
  };
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(
    <PaymentForm {...props} store={store} />
  ).dive();

  return {
    props,
    enzymeWrapper
  };
}

describe('Payment form', () => {
  it('should render Payment form', () => {
    // Setup wrapper and assign props.
    const { enzymeWrapper, props } = shallowSetup();

    expect(enzymeWrapper.exists()).toBe(true);
    expect(enzymeWrapper).toMatchSnapshot();
    expect(enzymeWrapper.find('div').prop('data-test')).toEqual('paymentForm');
  });

  it('should call handleToken', () => {});
});
