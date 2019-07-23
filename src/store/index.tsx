import firebase from "config/fbConfig";
import { getFirebase, firebaseReducer } from "react-redux-firebase";
import { authReducer } from "reducers/authReducer";
import { reactReduxFirebase } from "react-redux-firebase";
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
export const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store<AppState> {
  const store = createStore(
    rootReducer,
    undefined,
    compose(
      composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, {
          useFirestoreForProfile: true,
          userProfile: "Users"
        })
      )
    )
  );
  return store;
}
