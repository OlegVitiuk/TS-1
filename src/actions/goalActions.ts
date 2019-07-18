import { Dispatch } from "redux";
import { AppState } from "store";
import {
  ADD_GOAL,
  EDIT_GOAL,
  GoalActionTypes,
  REMOVE_GOAL
} from "types/actions";
import { IGoal } from "types/goal";
import uuidv4 from "uuid/v4";

export const addGoal = (goal: IGoal): GoalActionTypes => ({
  type: ADD_GOAL,
  goal
});

export const removeGoal = (id: string): GoalActionTypes => ({
  type: REMOVE_GOAL,
  id
});

export const editGoal = (goal: IGoal): GoalActionTypes => ({
  type: EDIT_GOAL,
  goal
});

export const startAddGoal = (goal: IGoal) => (
  dispatch: Dispatch<GoalActionTypes>,
  getState: () => AppState
) =>
  dispatch(
    addGoal({
      id: uuidv4(),
      ...goal
    })
  );

export const startRemoveGoal = (id: string) => (
  dispatch: Dispatch<GoalActionTypes>,
  getState: () => AppState
) => dispatch(removeGoal(id));

export const startEditGoal = (goal: IGoal) => (
  dispatch: Dispatch<GoalActionTypes>,
  getState: () => AppState
) => dispatch(editGoal(goal));

// export const getAllCharacters: ActionCreator<
//   ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetAllAction>
// > = () => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const response = await axios.get("https://swapi.co/api/people/");
//       dispatch({
//         characters: response.data.results,
//         type: CharacterActionTypes.GET_ALL
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };
