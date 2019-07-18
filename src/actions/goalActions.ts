import Firebase from "firebase";
import { useFirebase } from "react-redux-firebase";
import { Action, ActionCreator, Dispatch } from "redux";
import { getFirestore } from "redux-firestore";
import { ThunkAction } from "redux-thunk";
import { AppState } from "store";
import { ADD_GOAL, GoalActionTypes, REMOVE_GOAL } from "types/actions";
import { IGoal } from "types/goal";
import uuidv4 from "uuid/v4";

// export const addGoal = (goal: IGoal): GoalActionTypes => ({
//   type: ADD_GOAL,
//   goal
// });

export const removeGoal = (id: string): GoalActionTypes => ({
  type: REMOVE_GOAL,
  id
});

// export const startAddGoal = (goal: IGoal) => (
//   dispatch: Dispatch<GoalActionTypes>,
//   getState: () => AppState
// ) =>
//   dispatch(
//     addGoal({
//       id: uuidv4(),
//       ...goal
//     })
//   );

export const addGoal: ActionCreator<
  ThunkAction<Promise<any>, IGoal, null, GoalActionTypes>
> = goal => {
  return async (
    dispatch: Dispatch<Action>,
    getState: any,
    { getFirestore }: any
  ) => {
    try {
      const firestore = getFirestore();
      await firestore.collection("Goals").add({
        ...goal
      });

      dispatch({
        goal,
        type: ADD_GOAL
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const startRemoveGoal = (id: string) => (
  dispatch: Dispatch<GoalActionTypes>,
  getState: () => AppState
) => dispatch(removeGoal(id));

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
