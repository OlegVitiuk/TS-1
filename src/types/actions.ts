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
export const GET_GOAL = "GET_GOAL";

// authActions
interface AuthSuccessfulAction {
  type: typeof AUTH_SUCCESSFUL;
}

// goals actions
interface AddGoalAction {
  type: typeof ADD_GOAL;
  goal: IGoal;
}

interface RemoveGoalAction {
  type: typeof REMOVE_GOAL;
  id: string;
}

interface EditGoalAction {
  type: typeof EDIT_GOAL;
  goal: IGoal;
}

interface GetGoalAction {
  type: typeof GET_GOAL;
  goalsData: IGoal[];
}

export type GoalActionTypes =
  | AddGoalAction
  | RemoveGoalAction
  | EditGoalAction
  | GetGoalAction;
