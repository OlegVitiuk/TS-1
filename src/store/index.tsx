import firebase from "config/fbConfig";
import { useFirebase } from "react-redux-firebase";
import { authReducer } from "reducers/authReducer";
import { goalReducer } from "reducers/goalReducer";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  firestoreReducer,
  getFirestore,
  reduxFirestore
} from "redux-firestore";
import thunk from "redux-thunk";

// Create the root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  goalData: goalReducer,
  firestore: firestoreReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store<AppState> {
  const store = createStore(
    rootReducer,
    undefined,
    compose(
      composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({ useFirebase, getFirestore })),
        reduxFirestore(firebase)
      )
    )
  );
  return store;
}
