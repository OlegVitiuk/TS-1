// Import redux types
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

// Import Auth Typing
import { IAuthState } from "../reducers/authReducer";

// Create Action Constants
export enum AuthActionTypes {
  AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS",
  AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE"
}

// Interface for Get All Action Type
// export interface IAuthGetAllAction {
//   type: AuthActionTypes.AUTHENTICATION_SUCCESS;
//   characters: ICharacter[];
// }

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
// export type CharacterActions = ICharacterGetAllAction;

// /* Get All Action
// <Promise<Return Type>, State Interface, Type of Param, Type of Action> */
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

// Interface for Get All Action Type
export interface IAuthGetAllAction {
  type: AuthActionTypes.AUTHENTICATION_SUCCESS;
}

export type AuthActions = IAuthGetAllAction;
