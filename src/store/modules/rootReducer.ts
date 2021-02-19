import { combineReducers } from 'redux';

import { login, TLoginReducer } from './login/reducers';

export interface TStore {
  login: TLoginReducer
};

export const rootReducer =  combineReducers<TStore>({
  login
});
