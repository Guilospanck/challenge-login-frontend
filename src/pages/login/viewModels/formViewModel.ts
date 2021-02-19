import { ILoginUseCase } from '../useCases/loginUseCase';
import { loginRequest } from '../../../store/modules/login/actions';
import { useDispatch } from 'react-redux';

type Props = {
  loginUseCase: ILoginUseCase
};

export interface IUseFormViewModel {
  loginUser: (email: string, password: string) => void
};

const useFormViewModel = ({ loginUseCase }: Props): IUseFormViewModel => {

  const dispatchActions = useDispatch();

  const loginUser = (email: string, password: string) => {
    let userCredentials = loginUseCase.transformsEmailAndPasswordIntoLoginModel(email, password);
    dispatchActions(loginRequest(userCredentials));
  };

  return { loginUser };
};

export default useFormViewModel;
