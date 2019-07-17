import { authReducer, IAuthState } from "reducers/authReducer";
import { goalReducer } from "reducers/goalReducer";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IGoalState } from "types/goal";

import thunk from "redux-thunk";

// export interface IAppState {
//   readonly authState: IAuthState;
//   readonly goalState: IGoalState;
// }

// Create the root reducer
const rootReducer = combineReducers({
  authState: authReducer,
  goalState: goalReducer
});

export type AppState = ReturnType<typeof rootReducer>;

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<AppState> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
