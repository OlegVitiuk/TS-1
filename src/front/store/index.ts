import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
  system: authReducer
});

export type AppState = ReturnType<typeof rootReducer>;
