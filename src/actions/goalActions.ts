import { ActionCreator, Dispatch } from "redux";
import { IAppState } from "store";
import { AppActions } from "types/actions";
import { IGoal } from "types/goal";
import uuidv4 from "uuid/v4";

export const addGoal = (goal: IGoal): AppActions => ({
  type: "ADD_GOAL",
  goal
});

export const removeGoal = (id: string): AppActions => ({
  type: "REMOVE_GOAL",
  id
});

export const editGoal = (goal: IGoal): AppActions => ({
  type: "EDIT_GOAL",
  goal
});

export const startAddGoal = (goal: IGoal) => (
  dispatch: Dispatch<AppActions>,
  getState: () => IAppState
) =>
  dispatch(
    addGoal({
      id: uuidv4(),
      goal
    })
  );

export const startRemoveGoal = (id: string) => (
  dispatch: Dispatch<AppActions>,
  getState: () => IAppState
) => dispatch(removeGoal(id));

export const startEditGoal = (goal: IGoal) => (
  dispatch: Dispatch<AppActions>,
  getState: () => IAppState
) => dispatch(editGoal(goal));
