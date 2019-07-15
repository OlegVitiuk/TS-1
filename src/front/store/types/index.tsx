export const AUTHENTICATE = "AUTHENTICATE";
export const AUTHENTICATION_SUCCESSFUL = "AUTHENTICATION_SUCCESSFUL";
export const AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED";

export interface Auth {
  isAuthenticated: boolean;
}

interface AuthenticateAction {
  type: typeof AUTHENTICATE;
  payload: Auth;
}

interface AuthenticationSuccessfulAction {
  type: typeof AUTHENTICATION_SUCCESSFUL;
  payload: Auth;
}

interface AuthenticationFailedAction {
  type: typeof AUTHENTICATION_FAILED;
  payload: Auth;
}

export type AuthActionTypes =
  | AuthenticateAction
  | AuthenticationFailedAction
  | AuthenticateAction;
