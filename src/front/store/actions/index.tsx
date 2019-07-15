import {
  Auth,
  AuthActionTypes,
  AUTHENTICATE,
  AUTHENTICATION_FAILED,
  AUTHENTICATION_SUCCESSFUL
} from "../types";

// TypeScript infers that this function is returning SendMessageAction
export function authenticate(authData: Auth): AuthActionTypes {
  return {
    type: AUTHENTICATE,
    payload: authData
  };
}
