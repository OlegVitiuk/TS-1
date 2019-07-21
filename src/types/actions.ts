// authentication
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

// pay
export const PAYMENT_SUCCESSFUL = "PAYMENT_SUCCESSFUL";
export const PAYMENT_FAILED = "PAYMENT_FAILED";

// authActions
interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

interface LoginFailedAction {
  type: typeof LOGIN_FAILED;
  err: string;
}

export type AuthActionTypes = LoginSuccessAction | LoginFailedAction;
