import React from 'react';
import { act, render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../index';
import { renderWithRedux } from '../../../tests/utils/renderRedux';
import { login, TLoginReducer } from '../../../store/modules/login/reducers';
import { debug } from 'console';


const initial: TLoginReducer = {
  logins: [],
  loading: false
}

afterEach(cleanup);

describe('Testing Login View components rendering', () => {

  it('testing label email', () => {
    const { queryByTestId } = renderWithRedux(<Login />, login, initial);
    expect(queryByTestId('labelEmail')).toBeTruthy()
  });

  it('testing label password', () => {
    const { queryByTestId } = renderWithRedux(<Login />, login, initial);
    expect(queryByTestId('labelPassword')).toBeTruthy()
  });

  it('testing input email', () => {
    const { queryByTestId } = renderWithRedux(<Login />, login, initial);
    expect(queryByTestId('inputEmail')).toBeTruthy()
  });

  it('testing input email', () => {
    const { queryByTestId } = renderWithRedux(<Login />, login, initial);
    expect(queryByTestId('inputPassword')).toBeTruthy()
  });

  it('testing login button', () => {
    const { queryByTestId } = renderWithRedux(<Login />, login, initial);
    expect(queryByTestId('button')).toBeTruthy()
  });

});

describe('Testing login call', () => {

  it('Testing wrong email and password login', async () => {
    const { queryByTestId } = renderWithRedux(<Login />, login, initial);

    const inputEmail: any = queryByTestId('inputEmail');
    const inputPassword: any = queryByTestId('inputPassword');

    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } })
    fireEvent.change(inputPassword, { target: { value: 'test' } })

    fireEvent.click(queryByTestId('button') as any);

    expect(await screen.findByText("Credenciais erradas. Tente novamente.")).toBeInTheDocument()
  });

});



