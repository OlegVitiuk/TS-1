import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IGoal } from "types/goal";
import { useFirebase } from "react-redux-firebase";
import { LOGIN_SUCCESS, LOGIN_FAILED } from "types/actions";

export const signIn: ActionCreator<
  ThunkAction<Promise<any>, IGoal, null, Action>
> = creds => {
  return async (
    dispatch: Dispatch<Action>,
    getState: any,
    { useFirebase }: any
  ) => {
    try {
      const firebase = useFirebase();
      const { email, password } = creds;

      await firebase.auth.signInWithEmailAndPassword(email, password);
      dispatch({
        type: LOGIN_SUCCESS
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAILED,
        err
      });
    }
  };
};

// export const signOut: ActionCreator<
//   ThunkAction<Promise<any>, string, null, Action>
// > = id => {
//   return async (
//     dispatch: Dispatch<Action>,
//     getState: any,
//     { getFirestore }: any
//   ) => {
//     try {
//       const firestore = getFirestore();
//       await firestore
//         .collection("Goals")
//         .doc(id)
//         .delete();
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };
