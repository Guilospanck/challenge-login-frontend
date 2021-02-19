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
      `${process.env.REACT_APP_API_LOGIN}`,
    );

    toast.success('Você está logado!');
    yield put(
      loginSuccess(response)
    );
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
