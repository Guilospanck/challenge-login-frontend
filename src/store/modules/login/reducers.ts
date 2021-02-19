import { Types } from './actions';
import { LoginModel } from '../../../models/login/LoginModel';

type ActionType = {
  type: string;
  payload: any;
};

export type TLoginReducer = {
  logins: LoginModel[];
  loading: boolean;
};

const INITIAL_STATE: TLoginReducer = {
  logins: [],
  loading: false,
};

export const login = (state = INITIAL_STATE, action: ActionType) => {

  switch(action.type){
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }

    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        logins: [...state.logins, action.payload]
      }

    case Types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }

};
