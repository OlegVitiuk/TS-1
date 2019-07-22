// authentication
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";

// pay
export const PAYMENT_SUCCESSFUL = "PAYMENT_SUCCESSFUL";
export const PAYMENT_FAILED = "PAYMENT_FAILED";

// authActions
interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

interface LoginFailedAction {
  type: typeof LOGIN_FAILED;
  err: {
    message: string;
  };
}

interface SignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}

export type AuthActionTypes =
  | LoginSuccessAction
  | LoginFailedAction
  | SignOutSuccessAction;
