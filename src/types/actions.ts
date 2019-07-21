import { IGoal } from "./goal";

// authentication
export const AUTH_SUCCESSFUL = "AUTH_SUCCESSFUL";
export const AUTH_FAILED = "AUTH_FAILED";

// pay
export const PAYMENT_SUCCESSFUL = "PAYMENT_SUCCESSFUL";
export const PAYMENT_FAILED = "PAYMENT_FAILED";

// authActions
interface AuthSuccessfulAction {
  type: typeof AUTH_SUCCESSFUL;
}

export type AuthActionTypes = AuthSuccessfulAction;
