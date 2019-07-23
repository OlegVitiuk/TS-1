import { authReducer } from "reducers/authReducer";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "types/actions";

describe("Auth reducer", () => {
  it("has a default state", () => {
    expect(authReducer(undefined, { type: "undefined" })).toEqual({
      authError: ""
    });
  });

  it("can handle LOGIN_SUCCESS", () => {
    expect(authReducer(undefined, { type: LOGIN_SUCCESS })).toEqual({
      authError: ""
    });
  });

  it("can handle LOGIN_FAILED", () => {
    const errorObj = {
      message: "Some error"
    };

    expect(
      authReducer(undefined, { type: LOGIN_FAILED, err: errorObj })
    ).toEqual({
      authError: "Some error"
    });
  });

  it("can handle SIGN_OUT_SUCCESS", () => {
    expect(authReducer(undefined, { type: SIGN_OUT_SUCCESS })).toEqual({
      authError: ""
    });
  });

  it("can handle SIGN_UP_SUCCESS", () => {
    expect(authReducer(undefined, { type: SIGN_UP_SUCCESS })).toEqual({
      authError: ""
    });
  });

  it("can handle SIGN_UP_FAILURE", () => {
    const errorObj = {
      message: "Some error"
    };
    expect(
      authReducer(undefined, { type: SIGN_UP_FAILURE, err: errorObj })
    ).toEqual({
      authError: "Some error"
    });
  });
});
