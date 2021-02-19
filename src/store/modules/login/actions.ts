import { LoginModel } from '../../../models/login/LoginModel';

export const Types = {
  LOGIN_REQUEST: '@login/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@login/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@login/LOGIN_FAILURE',
};

export const loginRequest = (login : LoginModel) => ({
  type: Types.LOGIN_REQUEST,
  payload: login
});

export const loginSuccess = (login: LoginModel) => ({
  type: Types.LOGIN_SUCCESS,
  payload: login
});

export const loginFailure = () => ({
  type: Types.LOGIN_FAILURE,
});
