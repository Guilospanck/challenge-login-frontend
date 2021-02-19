import { toast } from 'react-toastify';

import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';

import axios from '../../../services/axios';

import {
  Types as LoginTypes,
  loginFailure,
  loginSuccess
} from './actions';

import { LoginModel } from '../../../models/login/LoginModel';


function* login({ payload }: { type: typeof LoginTypes.LOGIN_REQUEST; payload: LoginModel }) {

  if (!payload) {
    toast.error('Complete os campos antes de proceder.');
    return yield put(loginFailure());
  }

  try {
    const response = yield call(
      axios.get,
      `${process.env.NEXT_PUBLIC_API_LOGIN}`,
    );

    if(response.data[0].email === payload.email && response.data[0].password === payload.password){
      toast.success('Você está logado!');
      yield put(loginSuccess(response.data[0]));
    } else if (response.data[0].email === payload.email && response.data[0].password !== payload.password){
      toast.warn('A senha está errada. Tente novamente.');
      yield put(loginFailure());
    } else if (response.data[0].email !== payload.email && response.data[0].password === payload.password) {
      toast.warn('O email está errado. Tente novamente.');
      yield put(loginFailure());
    } else {
      toast.error('Credenciais erradas. Tente novamente.');
      yield put(loginFailure());
    }

  } catch (err) {
    if (!err.response) {
      toast.error('Ocorreu um erro inesperado no servidor, tente novamente mais tarde');
      yield put(loginFailure());
      return;
    }

    yield put(loginFailure());
  }
}

export default all([
  takeLatest(LoginTypes.LOGIN_REQUEST, login),
]);
