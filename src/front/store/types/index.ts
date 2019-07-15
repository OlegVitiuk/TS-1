export const AUTHENTICATE = "AUTHENTICATE";
export const AUTHENTICATION_SUCCESSFUL = "AUTHENTICATION_SUCCESSFUL";
export const AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED";

export interface AuthState {
  isAuthenticated: boolean;
}

interface AuthenticateAction {
  type: typeof AUTHENTICATE;
  payload: AuthState;
}

interface AuthenticationSuccessfulAction {
  type: typeof AUTHENTICATION_SUCCESSFUL;
  payload: AuthState;
}

interface AuthenticationFailedAction {
  type: typeof AUTHENTICATION_FAILED;
  payload: AuthState;
}

export type AuthActionTypes =
  | AuthenticateAction
  | AuthenticationFailedAction
  | AuthenticateAction;
