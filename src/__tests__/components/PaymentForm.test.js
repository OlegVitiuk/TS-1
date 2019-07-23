import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import React from "react";
import PaymentForm from "components/PaymentForm";
import { findByTestAttribute } from "utils";

// // create any initial state needed
// const initialState = {};
// // here it is possible to pass in any middleware if needed into //configureStore
// const mockStore = configureStore();

// describe("Payment form", () => {
//   let component;
//   let store;

//   beforeEach(() => {
//     //creates the store with any initial state or middleware needed
//     store = mockStore(initialState);
//     component = shallow(<PaymentForm store={store} />);
//   });

//   it("Should render without errors", () => {
//     const wrapper = findByTestAttribute(component, "paymentFormComponent");

//     console.log(wrapper, "wrapper");

//     expect(wrapper.length).toBe(1);
//   });
// });
