import { Reducer } from "redux";
import { GoalActionTypes } from "types/actions";
import { IGoal } from "types/goal";

export interface IGoalState {
  readonly goalsData: IGoal[];
}

// Define the initial state
const initialCharacterState: IGoalState = {
  goalsData: []
};

export const goalReducer: Reducer<IGoalState, GoalActionTypes> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case "ADD_GOAL":
      return [...state.goalsData, action.goal];
    case "REMOVE_GOAL":
      return state.goalsData.filter(({ id }) => id !== action.id);
    case "EDIT_GOAL":
      return state.goalsData.map(goal => {
        if (goal.id === action.goal.id) {
          return {
            ...goal,
            ...action.goal
          };
        }
        return goal;
      });
    default:
      return state;
  }
};
