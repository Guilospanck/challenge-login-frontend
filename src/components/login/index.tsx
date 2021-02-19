import Head from 'next/head';
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
    <>
      <Head>
        <title>Challenge Login - Frontend - Wiser</title>
      </Head>
      <LoginView FormComponent={FormComponent} />
    </>
  );

};

export default Login;
