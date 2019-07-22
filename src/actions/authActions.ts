import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { credsType } from "types/auth";
import { Redirect } from "react-router";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_OUT_SUCCESS,
  AuthActionTypes
} from "types/actions";

export const signIn: ActionCreator<
  ThunkAction<Promise<any>, credsType, null, AuthActionTypes>
> = creds => {
  return async (
    dispatch: Dispatch<Action>,
    getState: any,
    { getFirebase }: any
  ) => {
    try {
      console.log(creds, "creds");
      const firebase = getFirebase();
      const { email, password } = creds;

      console.log(firebase, "sfdasd");

      await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch({
        type: LOGIN_SUCCESS
      });
    } catch (err) {
      console.log(err, "err");
      dispatch({
        type: LOGIN_FAILED,
        err
      });
    }
  };
};

export const signOut: ActionCreator<
  ThunkAction<Promise<any>, undefined, null, AuthActionTypes>
> = () => {
  return async (
    dispatch: Dispatch<Action>,
    getState: any,
    { getFirebase }: any
  ) => {
    try {
      const firebase = getFirebase();

      await firebase.auth().signOut();
      dispatch({
        type: SIGN_OUT_SUCCESS
      });
    } catch (err) {
      console.error(err);
    }
  };
};
