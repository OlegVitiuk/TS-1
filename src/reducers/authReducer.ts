import {
  AuthActionTypes,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_OUT_SUCCESS
} from "types/actions";
import { Reducer } from "redux";

export interface IAuthState {
  readonly authError: string;
}

const initialState: IAuthState = {
  authError: ""
};

export const authReducer: Reducer<IAuthState, AuthActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        authError: ""
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        authError: action.err.message
      };
    }

    case SIGN_OUT_SUCCESS: {
      console.log("sign out!");
    }
    default:
      return state;
  }
};
