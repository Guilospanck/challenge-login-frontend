import { ILoginUseCase } from '../useCases/loginUseCase';
import { loginRequest } from '../../../store/modules/login/actions';
import { useDispatch } from 'react-redux';
import { FormEvent, RefObject, useRef } from 'react';

type Props = {
  loginUseCase: ILoginUseCase
};

export interface IUseFormViewModel {
  emailInputRef: RefObject<HTMLInputElement>,
  passInputRef: RefObject<HTMLInputElement>,
  loginUser: (e: FormEvent) => void
};

const useFormViewModel = ({ loginUseCase }: Props): IUseFormViewModel => {

  const dispatchActions = useDispatch();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passInputRef = useRef<HTMLInputElement>(null);

  const loginUser = (e: FormEvent) => {
    e.preventDefault();
    let email = emailInputRef.current?.value as string;
    let pass = passInputRef.current?.value as string;
    let userCredentials = loginUseCase.transformsEmailAndPasswordIntoLoginModel(email, pass);
    dispatchActions(loginRequest(userCredentials));
  };

  return { loginUser, passInputRef, emailInputRef };
};

export default useFormViewModel;
