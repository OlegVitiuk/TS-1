import { AuthActionTypes, AUTHENTICATE, AuthState } from "../types";

export function authenticate(authData: AuthState): AuthActionTypes {
  return {
    type: AUTHENTICATE,
    payload: authData
  };
}
