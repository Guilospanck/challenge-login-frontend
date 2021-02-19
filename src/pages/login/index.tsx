import LoginView from "./views";

import Form from './views/Form';
import useFormViewModel from './viewModels/formViewModel';
import { LoginUseCase } from './useCases/loginUseCase';

const FormComponent = () => {
  const loginUseCase = new LoginUseCase();
  const viewModel = useFormViewModel({ loginUseCase });

  return <Form viewModel={viewModel} />
};

const Login = () => {
  return (
    <LoginView FormComponent={FormComponent} />
  );

};

export default Login;
