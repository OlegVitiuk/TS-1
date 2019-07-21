import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IGoal } from "types/goal";

export const addGoal: ActionCreator<
  ThunkAction<Promise<any>, IGoal, null, Action>
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
    } catch (err) {
      console.error(err);
    }
  };
};

export const removeGoal: ActionCreator<
  ThunkAction<Promise<any>, string, null, Action>
> = id => {
  return async (
    dispatch: Dispatch<Action>,
    getState: any,
    { getFirestore }: any
  ) => {
    try {
      const firestore = getFirestore();
      await firestore
        .collection("Goals")
        .doc(id)
        .delete();
    } catch (err) {
      console.error(err);
    }
  };
};
