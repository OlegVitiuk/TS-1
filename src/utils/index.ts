import { applyMiddleware, createStore } from "redux";
import { rootReducer, AppState } from "store";
import checkPropsTypes from "check-prop-types";
import thunk from "redux-thunk";

// export const testStore = (initialState: AppState) => {
//   const createStoreWithMiddleware = applyMiddleware()(createStore);

//   return createStoreWithMiddleware(rootReducer, initialState);
// };

// export const checkProps = (component, expectedProps) =>
//   checkPropsTypes(component.propTypes, expectedProps, "props");

// export const create = () => {
//   const store = {
//     getState: jest.fn(() => ({})),
//     dispatch: jest.fn()
//   };
//   const next = jest.fn();

//   const invoke = action => thunk(store)(next)(action);

//   return { store, next, invoke };
//};
export const findByTestAttribute = (component, attr) =>
  component.find(`[data-test='${attr}']`);
