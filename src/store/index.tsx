import { authReducer, IAuthState } from "reducers/authReducer";
import { goalReducer, IGoalState } from "reducers/goalReducer";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppActions } from "types/actions";

import thunk, { ThunkMiddleware } from "redux-thunk";

export interface IAppState {
  readonly authState: IAuthState;
  readonly goalState: IGoalState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  authState: authReducer,
  goalState: goalReducer
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(
      applyMiddleware(thunk as ThunkMiddleware<IAppState, AppActions>)
    )
  );
  return store;
}
