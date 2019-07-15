import { Interface } from "readline";

export const AUTHENTICATE = "AUTHENTICATE";
export const AUTHENTICATION_SUCCESSFUL = "AUTHENTICATION_SUCCESSFUL";
export const AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED";

export interface Auth {
  isAuthenticated: boolean;
}

interface AuthenticateAction {
  type: typeof AUTHENTICATE;
}

interface AuthenticationSuccessfulAction {
  type: typeof AUTHENTICATION_SUCCESSFUL;
}

interface AuthenticationFailedAction {
  type: typeof AUTHENTICATION_FAILED;
}

export type AuthActionTypes =
  | AuthenticateAction
  | AuthenticationFailedAction
  | AuthenticateAction;
