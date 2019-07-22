import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  PAYMENT_FAILED,
  PAYMENT_SUCCESSFUL,
  PaymentActionTypes
} from "types/paymentActions";

export const pay: ActionCreator<
  ThunkAction<Promise<any>, string, null, PaymentActionTypes>
> = goalId => {
  return async (
    dispatch: Dispatch<Action>,
    getState: any,
    { getFirestore }: any
  ) => {
    try {
      const firestore = getFirestore();

      await firestore
        .collection("Goals")
        .doc(goalId)
        .update({
          paid: true
        });

      dispatch({
        type: PAYMENT_SUCCESSFUL
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: PAYMENT_FAILED,
        err
      });
    }
  };
};
