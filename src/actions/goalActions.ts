import Firebase from "firebase";
import { useFirebase } from "react-redux-firebase";
import { Action, ActionCreator, Dispatch } from "redux";
import { getFirestore } from "redux-firestore";
import { ThunkAction } from "redux-thunk";
import { AppState } from "store";
import { ADD_GOAL, GoalActionTypes, REMOVE_GOAL } from "types/actions";
import { IGoal } from "types/goal";
import uuidv4 from "uuid/v4";

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

export const removeGoal: ActionCreator<
  ThunkAction<Promise<any>, IGoal, null, GoalActionTypes>
> = goal => {
  return async (
    dispatch: Dispatch<Action>,
    getState: any,
    { getFirestore }: any
  ) => {
    try {
      const firestore = getFirestore();
      await firestore.collection("Goals").remove({
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
