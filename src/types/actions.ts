import { IGoal } from "./goal";

// authentication
export const AUTH_SUCCESSFUL = "AUTH_SUCCESSFUL";
export const AUTH_FAILED = "AUTH_FAILED";

// pay
export const PAYMENT_SUCCESSFUL = "PAYMENT_SUCCESSFUL";
export const PAYMENT_FAILED = "PAYMENT_FAILED";

// creating goals
export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";
export const EDIT_GOAL = "EDIT_GOAL";

// authActions
export interface AuthSuccessfulAction {
  type: typeof AUTH_SUCCESSFUL;
}

// goals actions
export interface AddGoalAction {
  type: typeof ADD_GOAL;
  goal: IGoal;
}

export interface RemoveGoalAction {
  type: typeof REMOVE_GOAL;
  id: string;
}

export interface EditGoalAction {
  type: typeof EDIT_GOAL;
  goal: IGoal;
}

export type GoalActionTypes = AddGoalAction | RemoveGoalAction | EditGoalAction;

export type AppActions = GoalActionTypes;
