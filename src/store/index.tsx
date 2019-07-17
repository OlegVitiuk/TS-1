/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
// Import reducers and state type
import { authReducer, IAuthState } from "reducers/authReducer";
import { characterReducer, ICharacterState } from "reducers/characterReducer";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { AppActions } from "types/actions";

import thunk, { ThunkMiddleware } from "redux-thunk";

// Create an interface for the application state
export interface IAppState {
  authState: IAuthState;
  characterState: ICharacterState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  authState: authReducer,
  characterState: characterReducer
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
