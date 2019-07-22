import { authReducer } from 'reducers/authReducer';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from 'types/actions';

describe('Auth reducer', () => {
  it('has a default state', () => {
    expect(authReducer(undefined, { type: 'undefined' })).toEqual({
      authError: ''
    });
  });

  it('can handle LOGIN_SUCCESS', () => {
    expect(authReducer(undefined, { type: LOGIN_SUCCESS })).toEqual({
      authError: ''
    });
  });

  it('can handle LOGIN_FAILED', () => {
    expect(authReducer(undefined, { type: LOGIN_FAILED })).toEqual({
      authError: { err: 'some error message' }
    });
  });

  it('can handle SIGN_OUT_SUCCESS', () => {
    expect(authReducer(undefined, { type: SIGN_OUT_SUCCESS })).toEqual({
      authError: ''
    });
  });

  it('can handle SIGN_UP_SUCCESS', () => {
    expect(authReducer(undefined, { type: SIGN_UP_SUCCESS })).toEqual({
      authError: ''
    });
  });

  it('can handle SIGN_UP_FAILURE', () => {
    expect(authReducer(undefined, { type: SIGN_UP_FAILURE })).toEqual({
      authError: { err: 'some error message' }
    });
  });
});
