import React from 'react';
import { fireEvent } from '@testing-library/react';
import Login from '../index';
import { renderWithRedux } from '../../../tests/utils/renderRedux';
import { login, TLoginReducer } from '../../../store/modules/login/reducers';
import * as Actions from '../../../store/modules/login/actions';


const initial: TLoginReducer = {
  logins: [],
  loading: false
}

describe('Testing Login View components rendering', () => {

  it('testing label email', () => {
    let { queryByTestId } = renderWithRedux(<Login />, login, initial);
    expect(queryByTestId('labelEmail')).toBeTruthy()
  });

  it('testing label password', () => {
    let { queryByTestId } = renderWithRedux(<Login />, login, initial);
    expect(queryByTestId('labelPassword')).toBeTruthy()
  });

  it('testing input email', () => {
    let { queryByTestId } = renderWithRedux(<Login />, login, initial);
    expect(queryByTestId('inputEmail')).toBeTruthy()
  });

  it('testing input email', () => {
    let { queryByTestId } = renderWithRedux(<Login />, login, initial);
    expect(queryByTestId('inputPassword')).toBeTruthy()
  });

  it('testing login button', () => {
    let { queryByTestId } = renderWithRedux(<Login />, login, initial);
    expect(queryByTestId('button')).toBeTruthy()
  });

});

const setup = () => {
  jest.spyOn(Actions, "loginRequest");
};

describe('Testing login call', () => {

  it('Testing wrong email and password login', async () => {

    setup();

    let { queryByTestId } = renderWithRedux(<Login />, login, initial);

    let inputEmail: any = queryByTestId('inputEmail');
    let inputPassword: any = queryByTestId('inputPassword');

    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } })
    fireEvent.change(inputPassword, { target: { value: 'test' } })

    expect(inputEmail.checkValidity()).toBeTruthy();
    expect(inputPassword.checkValidity()).toBeTruthy();

    fireEvent.click(queryByTestId('button') as any);

    expect(Actions.loginRequest).toHaveBeenCalledTimes(1);

  });

  it('Testing right email and password login', async () => {

    setup();

    let { queryByTestId } = renderWithRedux(<Login />, login, initial);

    let inputEmail: any = queryByTestId('inputEmail');
    let inputPassword: any = queryByTestId('inputPassword');

    fireEvent.change(inputEmail, { target: { value: 'wiser@wiser.com' } })
    fireEvent.change(inputPassword, { target: { value: 'wiser' } })

    expect(inputEmail.checkValidity()).toBeTruthy();
    expect(inputPassword.checkValidity()).toBeTruthy();

    fireEvent.click(queryByTestId('button') as any);

    expect(Actions.loginRequest).toHaveBeenCalledTimes(1);

  });

  it('Testing without email', async () => {

    setup();

    let { queryByTestId } = renderWithRedux(<Login />, login, initial);

    let inputEmail: any = queryByTestId('inputEmail');
    let inputPassword: any = queryByTestId('inputPassword');

    console.log(inputEmail.checkValidity())

    fireEvent.change(inputEmail, { target: { value: '' } })
    fireEvent.change(inputPassword, { target: { value: 'wiser' } })

    expect(inputEmail.checkValidity()).toBeFalsy();
    expect(inputPassword.checkValidity()).toBeTruthy();

    fireEvent.click(queryByTestId('button') as any);

    expect(Actions.loginRequest).toHaveBeenCalledTimes(0);

  });

  it('Testing without password', async () => {

    let { queryByTestId } = renderWithRedux(<Login />, login, initial);

    let inputEmail: any = queryByTestId('inputEmail');
    let inputPassword: any = queryByTestId('inputPassword');

    fireEvent.change(inputEmail, { target: { value: 'wiser@wiser.com' } })
    fireEvent.change(inputPassword, { target: { value: '' } })

    expect(inputEmail.checkValidity()).toBeTruthy();
    expect(inputPassword.checkValidity()).toBeFalsy();

    expect(Actions.loginRequest).toHaveBeenCalledTimes(0);

  });

  it('Testing without email and password', async () => {

    let { queryByTestId } = renderWithRedux(<Login />, login, initial);

    let inputEmail: any = queryByTestId('inputEmail');
    let inputPassword: any = queryByTestId('inputPassword');

    fireEvent.change(inputEmail, { target: { value: '' } })
    fireEvent.change(inputPassword, { target: { value: '' } })

    expect(inputEmail.checkValidity()).toBeFalsy();
    expect(inputPassword.checkValidity()).toBeFalsy();

    expect(Actions.loginRequest).toHaveBeenCalledTimes(0);

  });

});



