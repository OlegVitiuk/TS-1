// Import Reducer type
import { AuthActions, AuthActionTypes } from "front/actions/authActions";
import { Reducer } from "redux";

// Define the AuthState type
export interface IAuthState {
  isAuthenticated: boolean;
  token: string;
  errorMessage: string;
}

// Define the initial state
const initialCharacterState: IAuthState = {
  errorMessage: "",
  isAuthenticated: false,
  token: ""
};

export const authReducer: Reducer<IAuthState, AuthActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case AuthActionTypes.AUTHENTICATION_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        token: "asfdas"
      };
    }
    default:
      return state;
  }
};
