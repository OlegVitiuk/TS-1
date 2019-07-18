import { Reducer } from "redux";
import { GoalActionTypes } from "types/actions";
import { IGoal } from "types/goal";

const initialCharacterState: IGoal[] = [];

export const goalReducer: Reducer<IGoal[], GoalActionTypes> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case "ADD_GOAL":
      return [...state, action.goal];
    case "REMOVE_GOAL":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
