import { AuthActionTypes, AUTHENTICATE, AuthState } from "../types";

const initialState: AuthState = {
  isAuthenticated: false
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        isAuthenticated: action.payload.isAuthenticated
      };
    default:
      return state;
  }
}
