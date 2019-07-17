import { Reducer } from "redux";
import { GoalActionTypes } from "types/actions";
import { IGoalState } from "types/goal";

const initialCharacterState: IGoalState = {
  goalsData: []
};

export function goalReducer(
  state = initialCharacterState,
  action: GoalActionTypes
): IGoalState {
  switch (action.type) {
    // case "ADD_GOAL":
    //   return [...state.goalsData, action.goal];
    // case "REMOVE_GOAL":
    //   return state.goalsData.filter(({ id }) => id !== action.id);
    // case "EDIT_GOAL":
    //   return state.goalsData.map(goal => {
    //     if (goal.id === action.goal.id) {
    //       return {
    //         ...goal,
    //         ...action.goal
    //       };
    //     }
    //     return goal;
    //   });
    default:
      return state;
  }
}
