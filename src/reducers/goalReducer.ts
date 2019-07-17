import { statement } from "@babel/template";
import { GoalActionTypes } from "types/actions";
import { IGoal } from "types/goal";

const goalReducerDefaultState: IGoal = {};

export default (
  state = goalReducerDefaultState,
  action: GoalActionTypes
): IGoal => {
  switch (action.type) {
    case "ADD_GOAL":
      return [...state, action.goal];
    case "REMOVE_GOAL":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_GOAL":
      return state.map(goal => {
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
