import LoginView from "./views";
import useLoginViewModel from "./viewModels/loginViewModel";

const Login = () => {

  const loginViewModel = useLoginViewModel();

  return (
    <LoginView viewModel={loginViewModel} />
  );

};

export default Login;
