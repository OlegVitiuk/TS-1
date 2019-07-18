import { getFirebase } from "react-redux-firebase";
import { authReducer } from "reducers/authReducer";
import { goalReducer } from "reducers/goalReducer";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getFirestore } from "redux-firestore";

import thunk from "redux-thunk";

// Create the root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  goalData: goalReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store<AppState> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    )
  );
  return store;
}
